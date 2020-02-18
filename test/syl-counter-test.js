const chai = require("chai");
chai.use(require("chai-spies"));
const { expect, spy } = chai;

const { countSyllables }  = require('../markov');


describe(`countSyllables(word)`, () => {
  
  
  it("should return at least one syllable for non-empty string", () => {
    expect(countSyllables("a")).to.equal(1);
  });

  it("should return at zero for empty string", () => {
    expect(countSyllables("")).to.equal(0);
  });


  it("should handle contractions", () => {
    expect(countSyllables('won\'t')).to.equal(1);
    expect(countSyllables("didn\'t")).to.equal(2);
    expect(countSyllables('wouldn\'t')).to.equal(2);

  });

  it("should handle words that contain rriage vs. iag", () => {
    expect(countSyllables('carriage')).to.equal(2);
    expect(countSyllables("marriage")).to.equal(2);
    expect(countSyllables("triage")).to.equal(2);

  });

  it("should handle words containing _gion_, _sion_ or _tion_ ", () => {
    expect(countSyllables('region')).to.equal(2);
    expect(countSyllables("immersion")).to.equal(3);
    expect(countSyllables("nation")).to.equal(2);
    expect(countSyllables("version")).to.equal(2);
    expect(countSyllables("visionary")).to.equal(4);
    expect(countSyllables('national')).to.equal(3);
  });

  it("should handle words containing ie", () => {

     expect(countSyllables("lie")).to.equal(1);
     expect(countSyllables("quiet")).to.equal(2);
     expect(countSyllables("belief")).to.equal(2);
     expect(countSyllables("chief")).to.equal(1);
     expect(countSyllables("alien")).to.equal(3);
     expect(countSyllables("plier")).to.equal(2);

  });

  it('should handle priest and iest (as ending)', () => {

     expect(countSyllables("priest")).to.equal(1);
     expect(countSyllables("luckiest")).to.equal(3);
     expect(countSyllables("happiest")).to.equal(3);

  });

  context("when the the word ends in the following cases:", () => {
    it("should handle words ending in ious, eous", () => {
      
     expect(countSyllables("courageous")).to.equal(3);
     expect(countSyllables("contagious")).to.equal(3);
     expect(countSyllables("spacious")).to.equal(2);
     expect(countSyllables("gorgeous")).to.equal(2);

    });

    it("should handle word ending in e", () => {
       expect(countSyllables("made")).to.equal(1);
       expect(countSyllables("fudge")).to.equal(1);
       expect(countSyllables("dodge")).to.equal(1);
       expect(countSyllables('maybe')).to.equal(2);
    });

    it("should handle words containing t, or c in combination with ia, ial", () => {
      expect(countSyllables("partial")).to.equal(2);
      expect(countSyllables('special')).to.equal(2);
      expect(countSyllables('partially')).to.equal(3);
      expect(countSyllables('radially')).to.equal(4);
    });

    it("should handle words combining e and o", () => {
      expect(countSyllables("people")).to.equal(2);
      expect(countSyllables("jeopardy")).to.equal(3);
      expect(countSyllables("theology")).to.equal(4);
      expect(countSyllables("dungeon")).to.equal(2);
      expect(countSyllables("dungeons")).to.equal(2);
      expect(countSyllables("someone")).to.equal(2);
      expect(countSyllables("geology")).to.equal(4); 
      expect(countSyllables("preorder")).to.equal(3);
      expect(countSyllables("rodeo")).to.equal(3);
      expect(countSyllables("theory")).to.equal(3);

    });

    it("it should handle plural endings and conjugations", () => {

      expect(countSyllables("games")).to.equal(1);
      expect(countSyllables("makes")).to.equal(1);
      expect(countSyllables("charles")).to.equal(1);
      expect(countSyllables('dance')).to.equal(1);
      expect(countSyllables("dances")).to.equal(2);
      expect(countSyllables('blades')).to.equal(1);

    });

    it("should handle prefixes and suffixes", () => {
      expect(countSyllables('dr')).to.equal(2);
      expect(countSyllables('mr')).to.equal(2);
      expect(countSyllables('mrs')).to.equal(2);
      expect(countSyllables('jr')).to.equal(2);
      expect(countSyllables("sr")).to.equal(2);
      expect(countSyllables("ms")).to.equal(1);
    });
  });
});
