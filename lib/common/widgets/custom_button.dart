import 'package:flutter/material.dart';

class CustomButton extends StatelessWidget {
  String text;
  VoidCallback onTap;
  CustomButton({required this.text, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      child: Text(text),
      onPressed: onTap,
      style: ElevatedButton.styleFrom(minimumSize: Size(double.infinity, 50)),
    );
  }
}
