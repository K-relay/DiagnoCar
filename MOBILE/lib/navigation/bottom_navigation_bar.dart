import 'package:flutter/material.dart';

class BottomNavigation extends StatefulWidget {
  final int currentIndex;
  final void Function(int index) onIndexChanged;

  const BottomNavigation({
    required this.currentIndex,
    required this.onIndexChanged,
  });

  @override
  _BottomNavigationState createState() => _BottomNavigationState();
}

class _BottomNavigationState extends State<BottomNavigation> {
  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      items: <BottomNavigationBarItem>[
        BottomNavigationBarItem(
          icon: Icon(Icons.home),
          label: 'سەرەتا',
        ),
        BottomNavigationBarItem(
          icon: Icon(Icons.notifications),
          label: 'پێگەی ئاگادارییەکان',
        ),
      ],
      currentIndex: widget.currentIndex,
      selectedItemColor: const Color.fromARGB(255, 19, 98, 163),
      onTap: (index) {
        widget.onIndexChanged(index);
        _handleNavigation(context, index);
      },
      selectedFontSize: 14.0, // Change the font size if needed
      unselectedFontSize: 12.0, // Change the font size if needed
      selectedLabelStyle: TextStyle(fontFamily: 'NRT'),
      unselectedLabelStyle: TextStyle(fontFamily: 'NRT'),
    );
  }

  void _handleNavigation(BuildContext context, int index) {
    switch (index) {
      case 0:
        Navigator.pushNamed(context, '/Home');
        break;
      case 1:
        Navigator.pushNamed(context, '/notifications');
        break;
    }
  }
}
