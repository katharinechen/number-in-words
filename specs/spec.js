describe("numWord", function() {
  it("returns zero for 0", function(){
    numWord(0).should.equal("zero");
  });

  it("returns thirteen for 13", function(){
    numWord(13).should.equal("thirteen");
  });
  it("returns 'eighty two' for 82", function(){
    numWord(82).should.equal("eighty two");
  });
  it("returns 'three hundred' for 300", function() {
    numWord(300).should.equal("three hundred");
  });
  it("returns 'three hundred ninety nine' for 399", function(){
    numWord(399).should.equal("three hundred ninety nine");
  });
  it("return 'eight thousand' for 8000", function(){
    numWord(8000).should.equal("eight thousand");
  });
  it("returns 'eight thousand one hundred ninety two' for 8192", function(){
    numWord(8192).should.equal("eight thousand one hundred ninety two");
  });
  it("returns 'three million' for 3000000", function() {
    numWord(3000000).should.equal("three million");
  });
  it("returns 'three million one hundred seventy two thousand sixty two' for 3,172,062", function() {
    numWord(3172062).should.equal('three million one hundred seventy two thousand sixty two');
  });
});

