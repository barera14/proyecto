

var app = angular.module("myApp", []);


app.controller('MyCtrl', function ($scope) {
    $scope.gridOptions = {
        enableGridMenu: true,
        rowHeight: '52',
        paginationPageSize: 25,
        enableFiltering: true,
        columnDefs: [{
            name: 'Pago',
            field: 'pago'
        }, {
            name: 'Couta',
            field: 'couta'
        }, {
            name: 'Pendiente',
            field: 'pendiente'
        }, {
            name: 'Pagado',
            field: 'pagado'
        }]
    };

    $scope.gridOptionsS = {
        enableGridMenu: true,
        rowHeight: '52',
        paginationPageSize: 25,
        enableFiltering: true,
        columnDefs: [{
            name: 'Pago',
            field: 'spago'
        }, {
            name: 'Couta',
            field: 'scouta'
        }, {
            name: 'Pendiente',
            field: 'spendiente'
        }, {
            name: 'Pagado',
            field: 'spagado'
        }]
    };
    $scope.gridOptionst = {
        enableGridMenu: true,
        rowHeight: '52',
        paginationPageSize: 25,
        enableFiltering: true,
        columnDefs: [{
            name: 'Pago',
            field: 'tpago'
        }, {
            name: 'Couta',
            field: 'tcouta'
        }, {
            name: 'Pendiente',
            field: 'tpendiente'
        }, {
            name: 'Pagado',
            field: 'tpagado'
        }]
    };
    $scope.gridOptionsm= {
        enableGridMenu: true,
        rowHeight: '52',
        paginationPageSize: 25,
        enableFiltering: true,
        columnDefs: [{
            name: 'Pago',
            field: 'pago'
        }, {
            name: 'Couta',
            field: 'couta'
        }, {
            name: 'Pendiente',
            field: 'pendiente'
        }, {
            name: 'Pagado',
            field: 'pagado'
        }]
    };
        $scope.calcular = function () {
      
            // anual
            var tNa=$scope.TNA;
            var teT1=tNa/100;
            var teT2=3/12;
            var teTF=teT1*teT2;
            $scope.valTET=teTF;

            var tea1=tNa/100;
            var tea2=12/12;
            var teaF=tea1*tea2;
            $scope.valTEA=teaF;
            $scope.valTNA=$scope.TNA;
            $scope.valTNT=tNa/4;

              var capital = parseInt($scope.valor);
              var interes= $scope.Interes;
              var interesDe=interes/100;
              var plazo =parseInt($scope.Plazo);
              var plazomes= 12*plazo;
              var base =1+interesDe;
              var valExpo=Math.pow(base,plazo);
              var valin=valExpo-1;
              var valfini=interesDe/valin;
              var plazoS=2*plazo;
              var plazoT=4*plazo;
              var totalInteres =capital*interesDe;
              var totalcouta=capital+totalInteres;
             // $scope.ValInteres=capital*valfini;
              var couta=totalcouta/plazo;
              var coutas=totalcouta/plazoS;
              var coutat=totalcouta/plazoT;
              var coutam=totalcouta/plazomes;
                var pagado=0;
                var pagados=0;
                var pagadot=0;
                var pagadom=0;
                var pendiente=0;
                var pendientes=0;
                var pendientet=0;
                var pendientem=0;
              var data =[]; 
              var dataS=[];
              var dataT=[];
              var dataM=[];
                for (var i = 1; i <=plazo; i++) {
                 pagado=pagado+couta;
                pendiente=(capital+totalInteres)-pagado;
                    data.push({ pago: i, 
                        couta:couta.toFixed(2),
                        pendiente:pendiente.toFixed(2),
                        pagado:pagado.toFixed(2)  });
                };
                for (var i = 1; i <=plazoS; i++) {
                    pagados=pagados+coutas;
                   pendientes=(capital+totalInteres)-pagados;
                       dataS.push({ pago: i, 
                           couta:coutas.toFixed(2),
                           pendiente:pendientes.toFixed(2),
                           pagado:pagados.toFixed(2)  });
                   };
                   for (var i = 1; i <=plazoT; i++) {
                    pagadot=pagadot+coutat;
                    pendientet=(capital+totalInteres)-pagadot;
                   dataT.push({ pago: i, 
                           couta:coutat.toFixed(2),
                           pendiente:pendientet.toFixed(2),
                           pagado:pagadot.toFixed(2)  });
                   };
                   for (var i = 1; i <=plazomes; i++) {
                    pagadom=pagadom+coutam;
                    pendientem=(capital+totalInteres)-pagadom;
                   dataM.push({ pago: i, 
                           couta:coutam.toFixed(2),
                           pendiente:pendientem.toFixed(2),
                           pagado:pagadom.toFixed(2)  });
                   };
                $scope.mostrar=true;
                $scope.mostrar2=true;
                $scope.mostrars=true;
                $scope.esconder=true;
                $scope.capital=capital;
                $scope.valFin=capital+totalInteres;
                $scope.intere=totalInteres;
                $scope.insesimple=capital*interesDe*plazo;
                $scope.tabla=data;
                $scope.tablas=dataS;
                $scope.tablat=dataT;
                $scope.tablam=dataM;

    };
    $scope.cambio= function(opt){
        if(opt=='Anual'){
            
            $scope.anual=true;
            $scope.semes=false;
            $scope.trime=false;
            $scope.Mensual=false;
        }else if(opt=='semestral'){
            $scope.anual=false;
            $scope.semes=true;
            $scope.trime=false;
            $scope.Mensual=false;
        }else if(opt=='trime'){
            $scope.anual=false;
            $scope.semes=false;
            $scope.trime=true;
            $scope.Mensual=false;
        }else if(opt=='mens'){
            $scope.anual=false;
            $scope.semes=false;
            $scope.trime=false;
            $scope.Mensual=true;
        }
    };

});



