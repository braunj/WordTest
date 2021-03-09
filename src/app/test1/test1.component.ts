import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css'],
})
export class Test1Component implements OnInit {
  ctitle = 'Word Test Title';

  INPUT =
    'The quick brown fox jumped over the lazy dog for the fourth time over and over again';
  wordMap = new Map();
  wordArray: [any, any][] = [];
  size = 0;

  constructor() {}

  ngOnInit(): void {
    this.test1(this.INPUT);
  }

  test1(str: String): number {
    var tstr = str.concat(' ');
    var ptr = 0;
    var word = '';

    const len = tstr.length;

    while (ptr < len) {
      var letter = tstr[ptr++];
      if (letter !== ' ') {
        word = word.concat(letter);
      } else if (word.length > 0) {
        if (!this.wordMap.has(word)) {
          this.wordMap.set(word, { count: 1 });
        } else {
          var mword = this.wordMap.get(word);
          var cnt = mword.count;
          this.wordMap.set(word, { count: ++cnt });
        }

        word = '';
      }
    }

    this.wordArray = Array.from(this.wordMap);

    console.log('Sort alphabetically');
    this.wordArray.sort((a, b) => (a[0] > b[0] ? 1 : -1));
    this.wordArray.forEach(([key, value]) => console.log('a', key, value));

    console.log('Sort by frequency');
    this.wordArray.sort((a, b) => (a[1].count > b[1].count ? 1 : -1));
    this.wordArray.forEach(([key, value]) => console.log('c', key, value));

    this.size = this.wordMap.size;

    return this.size;
  }
}
