import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:http/http.dart' as http;

void main() {
  runApp(CheckPermissionApp());
}

class CheckPermissionApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Secure Storage Example',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: CheckPermission(),
    );
  }
}

class CheckPermission extends StatefulWidget {
  @override
  _CheckPermissionState createState() => _CheckPermissionState();
}

class _CheckPermissionState extends State<CheckPermission> {
  final FlutterSecureStorage secureStorage = FlutterSecureStorage();

  @override
  void initState() {
    super.initState();
    checkAndFetchSubscriptionInfo();
  }

  void checkAndFetchSubscriptionInfo() async {
    String? token = await secureStorage.read(key: 'access_token');

    if (token != null) {
      print('Access Token: $token');
      await fetchSubscriptionInfo(token);
    } else {
      print('Access token is null');
      navigateToPackage();
    }
  }

  Future<void> fetchSubscriptionInfo(String token) async {
    try {
      var response = await http.get(
        Uri.parse('http://51.20.138.46/subscription/info'),
        headers: {
          'Authorization': 'Bearer $token',
        },
      );
      print('Response status code: ${response.statusCode}');
      if (response.statusCode == 200) {
        navigateToSearch();
      } else {
        print('Failed to fetch subscription info. Status code: ${response.statusCode}');
        navigateToPackage(); // Change this to navigateToSearch() if needed
      }
    } catch (e) {
      print('Error: $e');
      navigateToPackage();
    }
  }

  void navigateToSearch() {
    Navigator.of(context).pushReplacementNamed('/Search');
  }

  void navigateToPackage() {
    Navigator.of(context).pushReplacementNamed('/package');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(child: CircularProgressIndicator()),
    );
  }
}
