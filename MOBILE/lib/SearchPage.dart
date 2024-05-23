import 'package:diagno/navigations_bar.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: SearchScreen(),
    );
  }
}

class SearchScreen extends StatefulWidget {
  @override
  _SearchScreenState createState() => _SearchScreenState();
}

class _SearchScreenState extends State<SearchScreen> {
  final TextEditingController _codeController = TextEditingController();
  final storage = FlutterSecureStorage();
  String _selectedManufacturer = 'Nissan';
  String _result = '';

  final List<String> _manufacturers = ['Nissan', 'Ford', 'Toyota', 'Honda', 'Chevrolet'];

  Future<void> _searchAndGetDetails() async {
    final code = _codeController.text.trim();
    final manufacturer = _selectedManufacturer;
    final accessToken = await storage.read(key: 'access_token');

    if (accessToken == null) {
      setState(() {
        _result = 'Error: Access token is null. Please ensure you are logged in.';
      });
      return;
    }

    final headers = {
      'Authorization': 'Bearer $accessToken',
      'Content-Type': 'application/json; charset=UTF-8',
    };

    await _getManufacturerDetails(code, manufacturer, headers);
    await _getCodeDetails(code, headers);
  }

  Future<void> _getManufacturerDetails(String code, String manufacturer, Map<String, String> headers) async {
    try {
      final Map<String, dynamic> requestBody = {
        'code': code,
        'manifacture': manufacturer,
      };

      final manufacturerResponse = await http.post(
        Uri.parse('http://51.20.138.46/code/manifacture/'),
        headers: headers,
        body: jsonEncode(requestBody),
      );

      if (manufacturerResponse.statusCode == 200) {
        final List<dynamic> manufacturerDataList = json.decode(utf8.decode(manufacturerResponse.bodyBytes));
        if (manufacturerDataList.isNotEmpty) {
          final Map<String, dynamic> manufacturerData = manufacturerDataList.first;
          final manufacturerCode = manufacturerData['code'];
          final manufacturerDescription = manufacturerData['description'];
          final manufacturerCategory = manufacturerData['category'];
          final manufacturerManifacture = manufacturerData['manifacture'];

          setState(() {
            _result = '$manufacturerCode\nوەسفی کۆد: $manufacturerDescription\nکاتیگۆری: $manufacturerCategory\nبەرهەمهێنەر: $manufacturerManifacture\n';
          });
        } 
        
      } else {
        _showSnackbar(context, 'POST request failed with status ${manufacturerResponse.statusCode}: ${manufacturerResponse.reasonPhrase}');
      }
    } catch (e) {
      setState(() {
        _result = 'Request error: $e\n';
      });
    }
  }

  Future<void> _getCodeDetails(String code, Map<String, String> headers) async {
    try {
      final detailsResponse = await http.get(
        Uri.parse('http://51.20.138.46/code/$code'),
        headers: headers,
      );

      if (detailsResponse.statusCode == 200) {
        final Map<String, dynamic> detailsData = json.decode(utf8.decode(detailsResponse.bodyBytes));
        if (detailsData.isNotEmpty) {
          final code = detailsData['code'];
          final description = detailsData['description'];
          final category = detailsData['category'];

          setState(() {
            _result += 'Code: $code\nDescription: $description\nCategory: $category';
          });
        } 
        
      } 
      // else {
      //   _showSnackbar(context, 'GET request failed with status ${detailsResponse.statusCode}: ${detailsResponse.reasonPhrase}');
      // }
    } catch (e) {
      setState(() {
        _result = 'Request error: $e\n';
      });
    }
  }

  void _showSnackbar(BuildContext context, String message) {
    final snackBar = SnackBar(content: Text(message));
    ScaffoldMessenger.of(context).showSnackBar(snackBar);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'گەڕان',
          style: TextStyle(color: Colors.white, fontFamily: 'NRT'),
        ),
        centerTitle: true,
        backgroundColor: Colors.blue,
        iconTheme: IconThemeData(color: Color.fromARGB(255, 252, 251, 251)),
        leading: IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: () {
            Navigator.pushReplacementNamed(context, '/Home');
          },
        ),
      ),
      endDrawer: MyEndDrawer(
        onThemeChanged: (bool) {},
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              TextField(
                controller: _codeController,
                decoration: InputDecoration(
                  labelText: 'Code',
                  border: OutlineInputBorder(),
                ),
              ),
              SizedBox(height: 16),
              DropdownButtonFormField<String>(
                value: _selectedManufacturer,
                decoration: InputDecoration(
                  labelText: 'Manufacturer',
                  border: OutlineInputBorder(),
                ),
                items: _manufacturers.map((String value) {
                  return DropdownMenuItem<String>(
                    value: value,
                    child: Text(value),
                  );
                }).toList(),
                onChanged: (String? newValue) {
                  setState(() {
                    _selectedManufacturer = newValue!;
                  });
                },
              ),
              SizedBox(height: 20),
              ElevatedButton.icon(
                onPressed: _searchAndGetDetails,
                icon: Icon(Icons.search),
                label: Text('گەڕان بکە'),
                style: ElevatedButton.styleFrom(
                  foregroundColor: Colors.white,
                  backgroundColor: Colors.blue, // text color
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8), // rounded corner
                  ),
                ),
              ),
              SizedBox(height: 20),
              Container(
                padding: EdgeInsets.all(10),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10),
                  color: Colors.grey[200],
                ),
                alignment: Alignment.center,
                child: Text(
                  _result.isNotEmpty ? 'ئەنجامی گەڕان:\n$_result' : 'هێشتا گەڕانت نەکردووە',
                  style: TextStyle(fontSize: 16, fontFamily: 'NRT'),
                  textAlign: TextAlign.justify,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
