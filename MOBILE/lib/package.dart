import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:url_launcher/url_launcher.dart';

import 'navigations_bar.dart';

class PackageScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        
        title: Text(
          'پاکێجەکان',
          style: TextStyle(fontFamily: 'NRT', color: Colors.white),
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

        // leading: IconButton(
        //   icon: Icon(Icons.arrow_back),
        //   onPressed: () {
        //     Navigator.pop(context); // Use Navigator.pop to go back
        //   },
        // ),
      ),
      endDrawer: MyEndDrawer(
        onThemeChanged: (bool) {},
      ),
      body: SingleChildScrollView(
        child: Container(
          padding: EdgeInsets.all(12.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              SizedBox(height: 12.0),
              Text(
                'پاکێجەکانمان',
                style: TextStyle(
                  fontSize: 32.0,
                  fontWeight: FontWeight.bold,
                  color: Colors.black,
                ),
              ),
              SizedBox(height: 12.0),
              Text(
                'پاکێجەکانمان و نرخەکانیان ، بۆ تۆی بەکارهێنەری بەشی گەڕانی کۆدەکان و بینی واتای کۆدەکان بە زمانی کوردی',
                style: TextStyle(
                  fontSize: 18.0,
                  color: Colors.grey[700],
                  fontFamily: 'NRT',
                ),
                textAlign: TextAlign.center,
              ),
              SizedBox(height: 12.0),
              Divider(
                color: Colors.indigo[200],
                thickness: 1.0,
                height: 24.0,
              ),
              SizedBox(height: 12.0),
              CarouselSlider(
                options: CarouselOptions(
                  height: 350.0,
                  aspectRatio: 16 / 9,
                  viewportFraction: 0.8,
                  initialPage: 0,
                  enableInfiniteScroll: true,
                  reverse: false,
                  autoPlay: true,
                  autoPlayInterval: Duration(seconds: 6),
                  autoPlayAnimationDuration: Duration(milliseconds: 800),
                  autoPlayCurve: Curves.fastOutSlowIn,
                  enlargeCenterPage: true,
                  scrollDirection: Axis.horizontal,
                ),
                items: [
                 PackageCard(
  title: 'مانگانە',
  price: '\$10', // Added a backslash before the dollar sign to escape it
  description:
      'ئۆفەری مانگانە ماوەی سی ڕۆژ دەتوانی تەواوی زانیاریەکان دەربارەی کۆدەکانی ئۆتۆمبێل ببینی',
),

                 PackageCard(
  title: '٦مانگ',
  price: '\$8 /mo', // Added a backslash before the dollar sign to escape it
  description:
      'ئەم ئۆفەرە بۆ ماوەی شەش مانگ بەردەوام دەبێت و داواکار لە کاتی هەبوونی پرسیار دەتوانێت پەیوەندی بکات',
  isPopular: true,
),

                 PackageCard(
  title: 'ساڵێک',
  price: '\$5 /mo', // Changed the currency symbol from euro (€) to dollar sign ('$')
  description:
      'بەکارهێەر هەموو تایبەتمەندیەکی دەبێت لە ناو سیستمەکەدا و لە نوێترین بێتا ڤێرژنەکاندا دەتوانێت ببێت بە بەکاربەر',
    
),

                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class PackageCard extends StatelessWidget {
  final String title;
  final String price;
  final String description;
  final bool isPopular;

  PackageCard(
      {required this.title,
      required this.price,
      required this.description,
      this.isPopular = false});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: MediaQuery.of(context).size.width * 0.8,
      margin: EdgeInsets.symmetric(horizontal: 8.0),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12.0),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.5),
            spreadRadius: 2,
            blurRadius: 5,
            offset: Offset(0, 3), // changes position of shadow
          ),
        ],
      ),
      child: Column(
        children: [
          ClipRRect(
  borderRadius: BorderRadius.only(
    topLeft: Radius.circular(12.0),
    topRight: Radius.circular(12.0),
  ),
  child: Container(
    padding: EdgeInsets.all(12.0),
    color: Colors.blue,
    child: Text(
      title,
      style: TextStyle(
        fontSize: 20.0,
        fontWeight: FontWeight.bold,
        fontFamily: 'NRT',
        color: Colors.white,
      ),
      textAlign: TextAlign.center,
    ),
  ),
),

          SizedBox(height: 8.0),
          Text(
            price,
            style: TextStyle(
              fontSize: 16.0,
              color: Colors.grey[700],
              fontFamily: 'NRT',
            ),
          ),
          SizedBox(height: 8.0),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 12.0),
            child: Text(
              description,
              style: TextStyle(
                fontSize: 14.0,
                color: Colors.black,
                fontFamily: 'NRT',
              ),
              textAlign: TextAlign.center,
            ),
          ),
          SizedBox(height: 8.0),
          ElevatedButton(
            onPressed: () {
              launch('https://forms.gle/HQx1W7hSbp69Z1iD9');
            },
            child: Text(
              'چالاکردن',
              style: TextStyle(
                fontSize: 16.0,
                fontWeight: FontWeight.bold,
                fontFamily: 'NRT'
              ),
            ),
            style: ElevatedButton.styleFrom(
              foregroundColor: Colors.white,
              backgroundColor: Colors.black,
              padding: EdgeInsets.symmetric(vertical: 12.0),
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.only(
                  bottomLeft: Radius.circular(12.0),
                  bottomRight: Radius.circular(12.0),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

void main() {
  runApp(MaterialApp(
    home: PackageScreen(),
    debugShowCheckedModeBanner: false, 
  ));
}
