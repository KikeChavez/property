(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports=t(21)},17:function(e,a,t){},20:function(e,a,t){},21:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(10),c=t.n(s),o=t(3),l=t(4),i=t(6),m=t(5),p=t(7),d=(t(17),t(8));t(20);function u(e){var a=e.handle,t=a.id,n=a.value,s=a.percent,c=e.getHandleProps;return r.a.createElement("div",Object.assign({style:{left:"".concat(s,"%")},className:"PHSlider__handle"},c(t)),r.a.createElement("div",{className:"PHSlider__handle-text"},n," %"))}var h=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).handleOnChange=function(e){t.props.onChange(e[0])},t}return Object(p.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(d.b,{className:"PHSlider",domain:[this.props.min,this.props.max],values:[this.props.value],step:.5,onChange:this.handleOnChange},r.a.createElement("div",{className:"PHSlider__rail"}),r.a.createElement(d.a,null,function(e){var a=e.handles,t=e.getHandleProps;return r.a.createElement("div",{className:"slider-handles"},a.map(function(e){return r.a.createElement(u,{key:e.id,handle:e,getHandleProps:t})}))}))}}]),a}(r.a.Component);h.defaultProps={value:0,onChange:function(){},min:2,max:7};var _=h,v={SELL:"venta",RENT:"renta"},E={CREDIT:"credit",CASH:"cash"},C=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).setOperation=function(e){t.setState({operation:e})},t.operationClassName=function(e){return t.state.operation===e?"PHCalc__op active":"PHCalc__op"},t.handleValueChange=function(e){console.log(e.target.value,t.moneyToFloat(e.target.value));var a=t.moneyToFloat(e.target.value);t.setState({value:a})},t.handlePaymentOption=function(e){t.setState({payment:e})},t.handleCommission=function(e){t.setState({commission:e})},t.getResultOperation=function(){var e=t.state.payment===E.CREDIT?t.props.credit_cost:t.props.cash_cost,a=0;return(a=t.state.operation===v.SELL?t.state.value*(t.state.commission/100)-e:t.state.value-e)>0?a:0},t.state={operation:v.SELL,value:1e7,payment:E.CASH,commission:e.slider_default},t}return Object(p.a)(a,e),Object(l.a)(a,[{key:"moneyToFloat",value:function(e){return""===e?0:parseFloat(Math.round(100*parseFloat(e.replace(/,/g,"")))/100).toFixed(2)}},{key:"floatToMoney",value:function(e){return new Intl.NumberFormat("es-MX",{currency:"MXN"}).format(e)}},{key:"render",value:function(){var e=this,a=this.floatToMoney(this.state.value),t=this.floatToMoney(this.getResultOperation());return r.a.createElement("div",{className:"PHCalc"},r.a.createElement("header",{className:"PHCalc__header"},this.props.encabezado),r.a.createElement("div",{className:"PHCalc__footer-text"},this.props.texto_footer),r.a.createElement("div",{className:"PHCalc__quest"},r.a.createElement("div",{className:"PHCalc__text"},this.props.preg_operacion),r.a.createElement("div",{className:"PHCalc__widget PHCalc__operation-type"},r.a.createElement("div",{className:"PHCalc__operation  PHCalc__operation-rent"},r.a.createElement("input",{type:"checkbox",className:this.operationClassName(v.RENT),onChange:function(){return e.setOperation(v.RENT)},checked:this.state.operation===v.RENT}),r.a.createElement("span",null,this.props.rentar)),r.a.createElement("div",{className:"PHCalc__operation PHCalc__operation-sell"},r.a.createElement("input",{type:"checkbox",className:this.operationClassName(v.SELL),onChange:function(){return e.setOperation(v.SELL)},checked:this.state.operation===v.SELL}),r.a.createElement("span",null,this.props.vender)))),r.a.createElement("div",{className:"PHCalc__quest"},r.a.createElement("div",{className:"PHCalc__text"},this.props.preg_opcion),r.a.createElement("div",{className:"PHCalc__widget PHCalc__payment-option"},r.a.createElement("div",{className:"form-check"},r.a.createElement("label",{className:"form-check-label"},"$ ",this.floatToMoney(this.props.credit_cost)," a meses sin intereses",r.a.createElement("input",{type:"checkbox",className:"form-check-input",value:E.CREDIT,checked:this.state.payment===E.CREDIT,onChange:function(){return e.handlePaymentOption(E.CREDIT)}}),r.a.createElement("span",{className:"form-check-checkmark"}))),r.a.createElement("div",{className:"form-check"},r.a.createElement("label",{className:"form-check-label"},"Promoci\xf3n de $ ",this.floatToMoney(this.props.cash_cost)," de contado",r.a.createElement("input",{type:"checkbox",className:"form-check-input",value:E.CASH,checked:this.state.payment===E.CASH,onChange:function(){return e.handlePaymentOption(E.CASH)}}),r.a.createElement("span",{className:"form-check-checkmark"}))))),r.a.createElement("div",{className:"PHCalc__quest"},r.a.createElement("div",{className:"PHCalc__text"},this.state.operation===v.SELL?this.props.preg_valor:this.props.preg_precio_estimado),r.a.createElement("div",{className:"PHCalc__widget PHCalc__property-value"},r.a.createElement("div",{className:"input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("div",{className:"input-group-text"},"$")),r.a.createElement("input",{type:"text",className:"form-control",onChange:this.handleValueChange,value:a,placeholder:"10,000,000.00"})))),this.state.operation===v.SELL?r.a.createElement("div",{className:"PHCalc__quest"},r.a.createElement("div",{className:"PHCalc__text"},this.props.preg_comision),r.a.createElement("div",{className:"PHCalc__widget PHCalc__slider"},r.a.createElement(_,{min:this.props.slider_min,max:this.props.slider_max,value:this.props.slider_default,onChange:this.handleCommission}))):r.a.createElement("div",{className:"PHCalc__widget PHCalc__spacer"}),r.a.createElement("div",{className:"PHCalc__result"},r.a.createElement("div",{className:"PHCalc__result-text"},this.props.ahorro),r.a.createElement("div",{className:"PHCalc__result-number"},"$ ",t)))}}]),a}(r.a.Component);C.defaultProps={encabezado:"El beneficio econ\xf3mico es solo uno de muchos que obtienes al contratar los servicios de PropertyHub",rentar:"Rentar",vender:"Vender",preg_operacion:"\xbfQu\xe9 necesitas?",preg_valor:"Valor de mi propiedad:",preg_precio_estimado:"Precio de renta estimado:",preg_opcion:"Pago \xfanico PropertyHub:",preg_comision:"Porcentaje que te cobrar\xeda otra inmobiliaria:",texto_footer:"El beneficio econ\xf3mico es solo uno de los mucho que obtiene al contratar los servicios de PropertyHub",ahorro:"\xbfQu\xe9 te regalar\xedas con este ahorro?",credit_cost:56e3,cash_cost:49900,slider_min:2,slider_max:7,slider_default:5};var f=C;c.a.render(r.a.createElement(f,window.phcalc),document.getElementById("property-hub-calc"))}},[[11,1,2]]]);
//# sourceMappingURL=main.be22a64a.chunk.js.map