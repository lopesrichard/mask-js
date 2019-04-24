=========
Importing
=========

You can download and import this script in your project ou use any cdn service like jsdelivr observing this sintax

https://cdn.jsdelivr.net/gh/lopesrichard/mask-js@{version}/Mask.min.js

Changing only the "version" to the prefered release

The latest release is right here: https://cdn.jsdelivr.net/gh/lopesrichard/mask-js@1.0.0/Mask.min.js

==========
How to Use
==========

The basic use is as follows

.. code:: javascript

  const element = document.getElementById('some-id');
  const masker = new Mask(element);
  masker.mask("your mask here");

The mask sintax is very sample, just use "#" and build your own mask.

.. code:: javascript

  const date = document.getElementById('date');
  const masker = new Mask(date);
  masker.mask("####-##-##");

Some cases you will need to apply a mask from right to left, in these cases just pass `true` as second
argument.

.. code:: javascript

  const money = document.getElementById('money');
  const masker = new Mask(money);
  masker.mask('###.###.###.###.###,##', true);

The process shown before, doesn't refresh automatically the mask when user types on input for example.
To make this, you must build a auxiliary function:

.. code:: javascript

   const mask = function(element, mask, reverse) {
      element.addEventListener('keyup', function() { //any events you prefer
         const masker = new Mask(this);
         masker.mask(mask, reverse);
      });
   };

   const element = document.getElementById('some-id');
   mask(element, "your mask");

And to apply in several inputs automatically, just use classes intead id's and loop over the elements.

.. code:: javascript

   for (let date of document.getElementsByClassName('date')) {
      mask(date, '####-##-##');
   }
