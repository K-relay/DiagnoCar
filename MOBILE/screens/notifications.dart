import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:flutter/services.dart'; // Import flutter services
import 'package:url_launcher/url_launcher.dart';

import '../navigation/navigations_bar.dart';
import '../navigation/bottom_navigation_bar.dart';

class NotificationPage extends StatefulWidget {
  @override
  _NotificationPageState createState() => _NotificationPageState();
}

class _NotificationPageState extends State<NotificationPage> {
  List<Map<String, String>> notificationData = [];

  @override
  void initState() {
    super.initState();
    fetchData();
  }

  Future<void> fetchData() async {
    final url = 'http://51.20.138.46/notification';
    try {
      final response = await http.get(Uri.parse(url));
      if (response.statusCode == 200) {
        final utf8decoder = Utf8Decoder();
        final jsonData = json.decode(utf8decoder.convert(response.bodyBytes));

        setState(() {
          notificationData = List<Map<String, String>>.from(jsonData.map((item) =>
              {'text': item['text'].toString(), 'link': item['link'].toString()}));
        });
      } else {
        print('Failed to load data: ${response.statusCode}');
        ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text('Failed to load data: ${response.statusCode}')));
      }
    } catch (error) {
      print('Error: $error');
      ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Error: $error')));
    }
  }

  void _launchURL(String url) async {
    try {
      // Launch the URL using platform-specific mechanism
      await launch(url);
    } on PlatformException catch (e) {
      // Handle error if unable to launch URL
      print("Error launching URL: $e");
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Could not launch URL: $e')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: PreferredSize(
        preferredSize: Size.fromHeight(60.0),
        child: Container(
          decoration: BoxDecoration(
            color: Colors.blue,
            borderRadius: BorderRadius.only(
              bottomLeft: Radius.circular(20.0),
              bottomRight: Radius.circular(20.0),
            ),
          ),
          child: AppBar(
            title: Text(
              'ئاگانامەکان',
              style: TextStyle(fontFamily: 'NRT', color: Colors.white),
            ),
            centerTitle: true,
            backgroundColor: Colors.transparent,
            elevation: 0.0,
            iconTheme: IconThemeData(color: Color.fromARGB(255, 252, 251, 251)),
          ),
        ),
      ),
      endDrawer: MyEndDrawer(onThemeChanged: (bool) {}),
      body: ListView.builder(
        itemCount: notificationData.length,
        itemBuilder: (context, index) {
          return Card(
            margin: EdgeInsets.all(8.0),
            child: Directionality(
              textDirection: TextDirection.rtl,
              child: ListTile(
                title: Text(
                  notificationData[index]['text'] ?? '',
                  style: TextStyle(
                    fontSize: 18.0,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                subtitle: InkWell(
                  onTap: () {
                    // Call _launchURL method to open the URL
                    _launchURL(notificationData[index]['link']!);
                  },
                  child: Text(
                    'خوێندنەوەی زیاتر',
                    style: TextStyle(
                      fontSize: 14.0,
                      decoration: TextDecoration.underline,
                      color: Colors.blue,
                      fontFamily: 'NRT'
                    ),
                  ),
                ),
              ),
            ),
          );
        },
      ),
      // bottomNavigationBar: BottomNavigationBar(
      //   items: const <BottomNavigationBarItem>[
      //     BottomNavigationBarItem(
      //       icon: Icon(Icons.post_add_rounded),
      //       label: 'پۆست',
      //     ),
      //     BottomNavigationBarItem(
      //       icon: Icon(Icons.notifications),
      //       label: 'پێگەی ئاگادارییەکان',
      //     ),
      //   ],
      //   selectedItemColor: const Color.fromARGB(255, 12, 15, 18),
      //   currentIndex: 1,
      //   onTap: (index) {
      //     if (index == 0) {
      //       Navigator.pushNamed(context, '/Home');
      //     } else if (index == 1) {
      //       Navigator.pushNamed(context, '/notifications');
      //     }
      //   },
      //   selectedLabelStyle: TextStyle(fontWeight: FontWeight.bold),
      // ),
       bottomNavigationBar: BottomNavigation(
        currentIndex: 1, // Provide currentIndex value
        onIndexChanged: (index) {
          // Handle index change
        },
      ),
    );
  }
}
