import 'package:flutter/material.dart';
// import 'package:getwidget/getwidget.dart';

class SliderPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              MySliderClass(),
              SizedBox(height: 20),
   OutlinedButton(
  onPressed: () {
    Navigator.of(context).pushNamed('/Login');
  },
  style: OutlinedButton.styleFrom(
    side: BorderSide(color: Colors.teal), // Border color
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(10.0), // Adjust the border radius
    ),
  ),
  child: Container(
    padding: EdgeInsets.symmetric(vertical: 14.0, horizontal: 18.0),
    child: Text(
      'چوونە ژووەرەوە',
      style: TextStyle(
        color: Colors.teal, // Text color
        fontSize: 16.0, // Adjust the font size
      ),
    ),
  ),
),
            ],
          ),
        ),
      ),
    );
  }
}

class Slide {
  final String title;
  final String text;
  final String imagePath;

  Slide({required this.title, required this.text, required this.imagePath});
}

class MySliderClass extends StatefulWidget {
  @override
  _MySliderClassState createState() => _MySliderClassState();
}

class _MySliderClassState extends State<MySliderClass> {
  double _sliderValue = 1.0;

  List<Slide> slides = [
    Slide(
      title: '...باشترین ئەپڵیکەیشن بۆ',
      text: '''
  بۆ چارەسەر کردنی کێشەکانی ئۆتۆمبێل و تێگەیشتن  
                لە کۆدی کێشەکانی ئۆتۆمبێل

      ''',
      imagePath: 'assets/images/slider_images/one.png',
    ),
    Slide(
      title: 'متمانە پێکراوین لە هەر کوێیەک بیت',
      text: '''       
       ئەپڵیکەیشنەکەمان بە زوترین کات ئەپدەیتی بۆ دێت  
           لە هەرکوێیەک بیت دەتوانی سودی لێ ببینی 
      ''',
      imagePath: 'assets/images/slider_images/second_slide.png',
    ),
    Slide(
      title: 'پارەی کۆمپیوتەر و وەستا بخە گیرفانت',
      text: '''  پێویست ناکات پارەی کۆمپیوتەری ئۆتۆمبێل بدەی
                بێبەرامبەر لای ئێمە بەردەستە  
      ''',
      imagePath: 'assets/images/slider_images/third_slide.png',
    ),
  ];

  @override
  Widget build(BuildContext context) {
    int index = _sliderValue.toInt() - 1;
    Slide currentSlide = slides[index];

    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text(
          currentSlide.title,
          style: TextStyle(
            fontSize: 20.0,
            fontWeight: FontWeight.bold,
            color: Colors.blue, // Set color to blue
            fontFamily:'NRT',
          ),
        ),
        Text(
          currentSlide.text,
          textDirection: TextDirection.rtl,
          style: TextStyle(fontSize: 15.0, fontWeight: FontWeight.bold,fontFamily:'NRT',),
          
        ),
        Image.asset(
          currentSlide.imagePath,
          height: 100,
        ),
        Slider(
          value: _sliderValue,
          onChanged: (value) {
            setState(() {
              _sliderValue = value;
            });
          },
          min: 1.0,
          max: 3.0,
          divisions: 2,
          label: _sliderValue.toString(),
        ),
      ],
    );
  }
}

void main() {
  runApp(SliderPage());
}
