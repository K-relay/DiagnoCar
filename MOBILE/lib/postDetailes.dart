import 'package:flutter/material.dart';
import 'package:intl/intl.dart'; // Import intl package

class DetailScreen extends StatelessWidget {
  final int postId;
  final String title;
  final String image;
  final String paragraph;
  final String time;

  DetailScreen({
    required this.postId,
    required this.title,
    required this.image,
    required this.paragraph,
    required this.time,
  });

  @override
  Widget build(BuildContext context) {
    // Format time string
    String formattedTime = DateFormat('yyyy-MM-dd HH:mm:ss').format(DateTime.parse(time));

    return Scaffold(
      appBar: AppBar(
        title: Text(
          'وردەکاری',
          style: TextStyle(color: Colors.white,fontFamily: 'NRT'),
        ),
        centerTitle: true,
        iconTheme: IconThemeData(color: Color.fromARGB(255, 252, 251, 251)),
        backgroundColor: Colors.blue,
        shape: ContinuousRectangleBorder(
          borderRadius: BorderRadius.only(
            bottomLeft: Radius.circular(40.0),
            bottomRight: Radius.circular(40.0),
          ),
        ),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                title,
                textAlign: TextAlign.right, // Align title to the right
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                  color: Colors.black,
                  fontFamily: 'NRT',
                ),
              ),
              SizedBox(height: 20),
              ClipRRect(
                borderRadius: BorderRadius.circular(12.0),
                child: Image.network(
                  image,
                  height: 200,
                  width: double.infinity,
                  fit: BoxFit.cover,
                ),
              ),
              SizedBox(height: 20),
              Container(
                padding: EdgeInsets.all(10),
                margin: EdgeInsets.symmetric(vertical: 10),
                decoration: BoxDecoration(
                  color: Colors.grey[300],
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Text(
                  paragraph,
                  textAlign: TextAlign.justify, // Justify the text
                  style: TextStyle(fontSize: 16, color: Colors.black, fontFamily: 'NRT'),
                ),
              ),
              SizedBox(height: 20),
              Container(
                decoration: BoxDecoration(
                  color: Colors.grey[200], // Background color for time
                  borderRadius: BorderRadius.circular(8),
                ),
                padding: EdgeInsets.all(10),
                child: Text(
                  'Time: $formattedTime', // Use formattedTime here
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Color.fromARGB(255, 33, 146, 216), fontFamily: 'NRT'),
                ),
              ),
              SizedBox(height: 20),
              // Add more details as needed
            ],
          ),
        ),
      ),
    );
  }
}
