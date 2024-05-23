import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class ExitDialog {
  final BuildContext context;
  final FlutterSecureStorage _secureStorage = FlutterSecureStorage();

  ExitDialog(this.context);

  void showExitDialog() {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text(
            'Exit Confirmation',
            style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.bold,
              color: Colors.blue, // Change color as desired
            ),
          ),
          content: Text(
            'دڵنیایت کە ئەتەوێت بچیتە دەرەوە؟',
            style: TextStyle(
              fontSize: 16,
              color: Colors.black87, // Change color as desired
              fontFamily: "NRT",
            ),
          ),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.of(context).pop(false);
              },
              child: Text(
                'نەخێر',
                style: TextStyle(
                  fontSize: 16,
                  color: Colors.red, // Change color as desired
                  fontFamily: "NRT",
                ),
              ),
            ),
            TextButton(
              onPressed: () async {
                await _secureStorage.delete(key: 'access_token');
                Navigator.of(context).pop(true);
              },
              child: Text(
                'چوونە دەرەوە',
                style: TextStyle(
                  fontSize: 16,
                  color: Colors.green, // Change color as desired
                  fontFamily: "NRT",
                ),
              ),
            ),
          ],
        );
      },
    ).then((value) {
      if (value == true) {
        Navigator.popAndPushNamed(context, '/Login');
      }
    });
  }
}
