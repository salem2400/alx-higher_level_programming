#!/usr/bin/python3

# This is a block comment describing the purpose of the script or
# providing other information.
# You can add more details here.

def safe_print_division(a, b):
    """Returns the division of a by b.

    Args:
        a (float): The numerator.
        b (float): The denominator.

    Returns:
        float or None: The result of the division, or None if there's an error.
    """
    try:
        div = a / b
    except (TypeError, ZeroDivisionError):
        div = None
    finally:
        print("Inside result: {}".format(div))
    return div
