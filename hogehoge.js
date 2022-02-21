console.assert(typeof Vue !== 'undefined');
    new Vue({
  el: '#page-demo',

  data: {
    page: 0,
    dispItemSize: 2,
    showPageCount: 9,
    from_one_to_nine_page: 1.8,
    data: [{
      key: '1',
      value: 'value1'
    }, {
      key: '2',
      value: 'value2'
    }, {
      key: '3',
      value: 'value3'
    }, {
      key: '4',
      value: 'value4'
    }, {
      key: '5',
      value: 'value5'
    }, {
      key: '6',
      value: 'value6'
    }, {
      key: '7',
      value: 'value7'
    }, {
      key: '8',
      value: 'value8'
    }, {
      key: '9',
      value: 'value9'
    }, {
      key: '10',
      value: 'value10'
    }, {
      key: '11',
      value: 'value11'
    }, {
      key: '12',
      value: 'value12'
    }, {
      key: '13',
      value: 'value13'
    }, {
      key: '14',
      value: 'value14'
    }, {
      key: '15',
      value: 'value15'
    }, {
      key: '16',
      value: 'value16'
    }, {
      key: '17',
      value: 'value17'
    }, {
      key: '18',
      value: 'value18'
    }, {
      key: '19',
      value: 'value19'
    }, {
      key: '20',
      value: 'value20'
    }, {
      key: '21',
      value: 'value21'
    }, {
      key: '22',
      value: 'value22'
    }, {
      key: '23',
      value: 'value23'
    }, {
      key: '24',
      value: 'value24'
    }, {
      key: '25',
      value: 'value25'
    }, {
      key: '26',
      value: 'value26'
    }, {
      key: '27',
      value: 'value27'
    }, {
      key: '28',
      value: 'value28'
    }, {
      key: '29',
      value: 'value29'
    }, {
      key: '30',
      value: 'value30'
    }, {
      key: '31',
      value: 'value31'
    }, {
      key: '32',
      value: 'value32'
    }, 
    {
      key: '34',
      value: 'value34'
    },
    {
      key: '35',
      value: 'value35'
    },
    {
      key: '36',
      value: 'value36'
    },
    {
      key: '37',
      value: 'value37'
    },
    {
      key: '38',
      value: 'value38'
    },
    {
      key: '39',
      value: 'value39'
    },
    {
      key: '40',
      value: 'value40'
    },
    {
      key: '41',
      value: 'value41'
    },
    {
      key: '42',
      value: 'value42'
    },
    {
      key: '43',
      value: 'value43'
    },
    {
      key: '44',
      value: 'value44'
    },
    {
      key: '45',
      value: 'value45'
    },
    {
      key: '46',
      value: 'value46'
    },
    {
      key: '47',
      value: 'value47'
    },
  ]
  },
  methods: {
    showFirst: function() {
      this.page = 0;
    },
    showPrev: function() {
      if (this.isStartPage) return;
      this.page--;
    },
    showNext: function() {
      if (this.isEndPage) return;
      this.page++;
    },
    showLast: function() {
      this.page = Math.floor((this.data.length - 1) / this.dispItemSize);
    },
    showPage: function(index) {
      this.page = index;
    }
  },
  computed: {
    dipsItems: function() {
      var startPage = this.page * this.dispItemSize;
      return this.data.slice(startPage, startPage + this.dispItemSize);
    },
    isStartPage: function() {
      return (this.page == 0);
    },
    isEndPage: function() {
      return ((this.page + 1) * this.dispItemSize >= this.data.length);
    },
    pageCount: function() {
      return this.data.length % this.dispItemSize == 0 ? Math.floor(this.data.length / this.dispItemSize - 1) : Math.floor(this.data.length / this.dispItemSize);
    },
    neighborPages: function() {
      const sidePageCount = Math.floor(this.showPageCount / 2)

      var start = 0;
      var end = 0;
      if (Math.floor((this.data.length - 1) / this.dispItemSize) >= -1 && ((this.data.length - 1) / this.dispItemSize) <= this.from_one_to_nine_page) {
        start = 0;
        if (this.data.length == 0) {
          end = -1;
        } else if (this.data.length <= this.dispItemSize) {
          end = 0;
        } else {
          end = Math.ceil((this.data.length - 1) / this.dispItemSize);
        }
      } else {
        start = Math.max(Math.min(this.pageCount, this.page + sidePageCount), this.showPageCount) - 9;
        end = Math.max(Math.min(this.pageCount, this.page + sidePageCount), this.showPageCount);
      }

      const pages = []
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
      return pages
    },
  }
});