export default {
    data() {
        return {
            tableData: [{
                date: '10/04/2018',
                orderName: 'Կոնֆերանս քարտ', 
                orderNumber: 'PL8093010350-001',
                status: 'առաքված',
                cost: 4000.00 
            },{
              date: '08/04/2018',
              orderName: 'քարտ', 
              orderNumber: 'PL8093045250-001',
              status: 'առաքված',
              cost: 6000.00 
          }],
          activeName: 'status'
        }
    },
    methods: {
        handleClick(tab, event) {
            //console.log(tab, event);
        }
    } 
}