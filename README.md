<h1>Translating Numbers to Words</h1> 
<p>Written by Katharine Chen and Justin Speers</p>
<p><a href="http://www.epicodus.com/">Epicodus</a></p> (Week#1 Day#5)

<p>The goal of the project is to create a program that translates numbers in numeric form into written words. For example, it would translate 384 into "three hundred eighty four".</p> 

<p>Object will be very useful for this problem. Note, though, that you can't use the dot notation when a property's name is a number. To use a number as a key, you need to use the less-used square bracket syntax for retrieving and setting values:<p>

<p>var numbers = {1: "one"};</p>
<p>numbers[1] // returns "one"</p>
<p>numbers[2] = "two";</p>

<p>Start small, and then get your code working for numbers up to 1 trillion.</p>