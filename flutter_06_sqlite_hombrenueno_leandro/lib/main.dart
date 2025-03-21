import 'package:english_words/english_words.dart';
import 'dart:async';
import 'package:flutter/material.dart';
import 'package:path/path.dart';
import 'package:sqflite_common_ffi/sqflite_ffi.dart';

class Dog {
  final int? id;
  final String name;
  final String breed;
  final String photo;

  Dog({
    this.id,
    required this.name,
    required this.breed,
    required this.photo,
  });


  Map<String, Object?> toMap() {
    return {'id': id, 'name': name, 'breed': breed, 'photo': photo};
  }

  @override
  String toString() {
    return 'Dog{id: $id, name: $name, breed: $breed, photo: $photo}';
  }
}

Future<Database> initializeDatabase() async {
  databaseFactory = databaseFactoryFfi;
  final databasePath = await getDatabasesPath();
  print("wmad-308-b database path: $databasePath");
  final databaseName = 'wmad-308-b_doggie_database.db';
  
  return openDatabase(
    join(databasePath, databaseName),
    onCreate: (db, version) {
      return db.execute(
        'CREATE TABLE dogs(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, breed TEXT, photo TEXT)',
      );
    },
    version: 1,
  );
}

class DatabaseHelper {
  final Database database;

  DatabaseHelper(this.database);

  Future<void> insertDog(Dog dog) async {
    await database.insert(
      'dogs',
      dog.toMap(),
      conflictAlgorithm: ConflictAlgorithm.replace,
    );
  }

  Future<List<Dog>> getDogs() async {
    final List<Map<String, Object?>> dogMaps = await database.query('dogs');
    return [
      for (final {
            'id': id as int?,
            'name': name as String,
            'breed': breed as String,
            'photo': photo as String,
          } in dogMaps)
        Dog(id: id, name: name, breed: breed, photo: photo),
    ];
  }

  Future<void> updateDog(Dog dog) async {
    await database.update(
      'dogs',
      dog.toMap(),
      where: 'id = ?',
      whereArgs: [dog.id],
    );
  }

  Future<void> deleteDog(int? id) async {
    if (id == null) return;
    await database.delete(
      'dogs',
      where: 'id = ?',
      whereArgs: [id],
    );
  }
}

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  final database = await initializeDatabase(); // Await the database
  final dbHelper = DatabaseHelper(database);   // Pass the resolved Database

  // Create - Insert 100 dogs
  for (var i = 0; i < 100; i++) {
    final myAdoptedDogName = WordPair.random().asPascalCase;
    final myAdoptedDog = Dog(
      name: myAdoptedDogName,
      breed: "Husky",
      photo: "https://some-url/$myAdoptedDogName.jpg",
    );
    await dbHelper.insertDog(myAdoptedDog);
  }

  // Read - Get all dogs
  List<Dog> myAdoptedDogs = await dbHelper.getDogs();
  print("wmad-308-b list of my adopted Dogs: ${myAdoptedDogs.length}");

  // Update - Change one dog's name
  if (myAdoptedDogs.isNotEmpty) {
    myAdoptedDogs.shuffle();
    Dog myLuckyDog = myAdoptedDogs.first;
    print("You're the lucky one to change your name: $myLuckyDog");
    
    myLuckyDog = Dog(
      id: myLuckyDog.id,
      name: "Kevin The Dog",
      breed: myLuckyDog.breed,
      photo: myLuckyDog.photo,
    );
    
    await dbHelper.updateDog(myLuckyDog);
    print("Your new name has officially registered: ${myLuckyDog.name}");
  }

  // Delete - Remove one dog
  if (myAdoptedDogs.isNotEmpty) {
    myAdoptedDogs.shuffle();
    Dog myUnluckyDog = myAdoptedDogs.first;
    print("You're so unlucky today: $myUnluckyDog");
    await dbHelper.deleteDog(myUnluckyDog.id);
    print("Dog has been removed from the database");
  }

  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text('You have pushed the button this many times:'),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ),
    );
  }
}