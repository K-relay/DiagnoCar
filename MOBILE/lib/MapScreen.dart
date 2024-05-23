import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:http/http.dart' as http;
import 'package:url_launcher/url_launcher.dart';
import 'package:flutter_map/flutter_map.dart';
import 'package:latlong2/latlong.dart';
import 'logout.dart';
import 'navigations_bar.dart';
void main() {
  runApp(MapApp());
}

class MapApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: MapPage(),
    );
  }
}

class MapPage extends StatefulWidget {
  @override
  _MapPageState createState() => _MapPageState();
}

class _MapPageState extends State<MapPage> {
  List<Map<String, dynamic>>? dataList;
  bool isDarkMode = false;

  @override
  void initState() {
    super.initState();
    fetchData();
  }

  Future<void> fetchData() async {
    try {
      final response = await http.get(Uri.parse('http://51.20.138.46/partners'));

      if (response.statusCode == 200) {
        final List<dynamic> fetchedData = json.decode(utf8.decode(response.bodyBytes));
        setState(() {
          dataList = fetchedData.cast<Map<String, dynamic>>();
        });
      } else {
        throw Exception('Failed to load data');
      }
    } catch (e) {
      print('Error fetching data: $e');
    }
  }

  Future<void> _makePhoneCall(String phoneNumber) async {
    final Uri launchUri = Uri(
      scheme: 'tel',
      path: phoneNumber,
    );
    if (!await launchUrl(launchUri)) {
      throw 'Could not launch $launchUri';
    }
  }

  void _handlePhoneCall(String? phoneNumber) {
    if (phoneNumber == null || phoneNumber.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Empty phone number'),
        ),
      );
      return;
    }

    try {
      _makePhoneCall(phoneNumber);
    } catch (e) {
      print('Error making phone call: $e');
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Failed to make phone call: $phoneNumber'),
        ),
      );
    }
  }

  Future<void> _launchURL(String url) async {
    final Uri uri = Uri.parse(url);
    if (!await launchUrl(uri, mode: LaunchMode.externalApplication)) {
      throw 'Could not launch $url';
    }
  }

  void _handleLaunchURL(String? url) {
    if (url == null || url.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Empty URL'),
        ),
      );
      return;
    }

    try {
      _launchURL(url);
    } catch (e) {
      print('Error launching URL: $e');
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text('Failed to launch URL: $url'),
        ),
      );
    }
  }

  void _toggleTheme(bool isDark) {
    setState(() {
      isDarkMode = isDark;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("نەخشەکان", style: TextStyle(fontFamily: 'NRT', color: Colors.white)),
        centerTitle: true,
        backgroundColor: Colors.blue,
        iconTheme: IconThemeData(color: Colors.white),
        leading: IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: () {
            Navigator.pushReplacementNamed(context, '/Home');
          },
        ),
      ),
endDrawer: MyEndDrawer(
          onThemeChanged: (isDarkMode) {
            // Handle theme change in the home screen
          },
        ),      body: SingleChildScrollView(
        child: Column(
          children: [
            dataList != null
                ? ListView.builder(
                    shrinkWrap: true,
                    physics: NeverScrollableScrollPhysics(),
                    itemCount: dataList!.length,
                    itemBuilder: (context, index) {
                      final item = dataList![index];
                      final title = item['title'];
                      final description = item['description'];
                      final location = item['location'];
                      final category = item['category'];
                      final phoneNumber = item['phoneNumber'];
                      final link = item['link'];
                      final latitude = double.tryParse(item['latitude']) ?? 0.0;
                      final longitude = double.tryParse(item['longitude']) ?? 0.0;

                      return Card(
                        margin: EdgeInsets.symmetric(vertical: 10, horizontal: 20),
                        elevation: 5,
                        child: Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.end,
                            children: [
                              Text(
                                'تایتڵ: $title',
                                style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18, fontFamily: 'NRT'),
                                textAlign: TextAlign.right,
                              ),
                              SizedBox(height: 5),
                              Text(
                                'وەسف: $description',
                                textAlign: TextAlign.right,
                                style: TextStyle(fontFamily: 'NRT'),
                              ),
                              Text(
                                'شوێن: $location',
                                textAlign: TextAlign.right,
                                style: TextStyle(fontFamily: 'NRT'),
                              ),
                              Text(
                                'جۆر: $category',
                                textAlign: TextAlign.right,
                                style: TextStyle(fontFamily: 'NRT'),
                              ),
                              InkWell(
                                onTap: () => _handlePhoneCall(phoneNumber),
                                child: Text(
                                  'ژمارەی مۆبایل: $phoneNumber',
                                  style: TextStyle(
                                    color: Colors.blue,
                                    decoration: TextDecoration.underline,
                                    fontFamily: 'NRT',
                                  ),
                                  textAlign: TextAlign.right,
                                ),
                              ),
                              SizedBox(height: 10),
                              InkWell(
                                onTap: () => _handleLaunchURL(link),
                                child: Icon(
                                  Icons.facebook,
                                  color: Colors.blue,
                                  size: 30.0,
                                ),
                              ),
                              SizedBox(height: 10),
                              _buildMap(latitude, longitude),
                            ],
                          ),
                        ),
                      );
                    },
                  )
                : Center(
                    child: CircularProgressIndicator(),
                  ),
          ],
        ),
      ),
    );
  }

  Widget _buildMap(double latitude, double longitude) {
    return Container(
      height: 300,
      width: double.infinity,
      child: Stack(
        children: [
          FlutterMap(
            options: MapOptions(
              center: LatLng(latitude, longitude),
              zoom: 13.0,
              maxZoom: 19.0,
              minZoom: 3.0,
            ),
            children: [
              TileLayer(
                urlTemplate: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                subdomains: ['a', 'b', 'c'],
              ),
              MarkerLayer(
                markers: [
                  Marker(
                    width: 60.0,
                    height: 50.0,
                    point: LatLng(latitude, longitude),
                    builder: (ctx) => Container(
                      child: Image.asset(
                        'assets/custom_marker.png',
                        width: 40.0,
                        height: 40.0,
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ],
      ),
    );
  }
}
