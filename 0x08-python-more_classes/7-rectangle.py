#!/usr/bin/python3
"""
Module: 7-rectangle.py
"""


class Rectangle:
    """
    Rectangle class
    """
    number_of_instances = 0
    print_symbol = "#"

    def __init__(self, width=0, height=0):
        """
        Initializes a new instance of the Rectangle class
        """
        self.width = width
        self.height = height
        Rectangle.number_of_instances += 1

    @property
    def width(self):
        """
        Gets the width of the Rectangle instance
        """
        return self.__width

    @width.setter
    def width(self, value):
        """
        Sets the width of the Rectangle instance
        """
        if not isinstance(value, int):
            raise TypeError("width must be an integer")
        elif value < 0:
            raise ValueError("width must be >= 0")
        else:
            self.__width = value

    @property
    def height(self):
        """
        Gets the height of the Rectangle instance
        """
        return self.__height

    @height.setter
    def height(self, value):
        """
        Sets the height of the Rectangle instance
        """
        if not isinstance(value, int):
            raise TypeError("height must be an integer")
        elif value < 0:
            raise ValueError("height must be >= 0")
        else:
            self.__height = value

    def area(self):
        """
        Calculates the area of the Rectangle instance
        """
        return self.__width * self.__height

    def perimeter(self):
        """
        Calculates the perimeter of the Rectangle instance
        """
        if self.__width == 0 or self.__height == 0:
            return 0
        else:
            return 2 * (self.__width + self.__height)

    def __str__(self):
        """
        Returns a string representation of the Rectangle instance
        """
        if self.__width == 0 or self.__height == 0:
            return ""
        else:
            return ((str(self.print_symbol) * self.__width + "\n") * self.__height)[:-1]

    def __repr__(self):
        """
        Returns a string representation of the Rectangle instance
        """
        return "Rectangle({}, {})".format(self.__width, self.__height)

    def __del__(self):
        """
        Deletes an instance of Rectangle class
        """
        Rectangle.number_of_instances -= 1
        print("Bye rectangle...")
