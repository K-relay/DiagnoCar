// import 'package:flutter/material.dart';
// import 'package:flutter_secure_storage/flutter_secure_storage.dart';

// class Token extends StatelessWidget {
//   final FlutterSecureStorage storage = FlutterSecureStorage();

//   Token({Key? key}) : super(key: key);

//   Future<String?> _fetchData() async {
//     return await storage.read(key: 'access_token');
//   }

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(),
//       body: FutureBuilder<String?>(
//         future: _fetchData(),
//         builder: (context, snapshot) {
//           if (snapshot.connectionState == ConnectionState.waiting) {
//             return Center(child: CircularProgressIndicator());
//           } else if (snapshot.hasError) {
//             return Center(child: Text('Error: ${snapshot.error}'));
//           } else {
//             // Display the access token in the Text widget
//             return Center(child: Text("Access Token: ${snapshot.data ?? 'No access token'}"));
//           }
//         },
//       ),
//     );
//   }
// }
