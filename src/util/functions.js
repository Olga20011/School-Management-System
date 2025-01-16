/* eslint-disable import/no-anonymous-default-export */

//const { ipcRenderer } = window.require('electron');
//const electron = window.require('electron') 
import $ from 'jquery';


export default {
   
    parseJwt(token) {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    },

    sessionGuard() {
        // const cookies = new Cookies();
        if (!localStorage.getItem('yexp@user')) {
            //window.location='/login';
            return false;
        } else {
            const access_token = localStorage.getItem('yexp@user');
            const decorded_token = this.parseJwt(access_token);
            return decorded_token['data']['user_id']
        }
    },
    readPermissions()
    {
        if(localStorage.getItem('yexp@user')) {
            const access_token = localStorage.getItem('yexp@user');
            const decorded_token = this.parseJwt(access_token);
            return decorded_token['data']['permissions']['list']
        }else{
            return false;
        }
    },
    readUser()
    {
        if (localStorage.getItem('yexp@user')) 
        {
        const access_token = localStorage.getItem('yexp@user');
        const decorded_token = this.parseJwt(access_token);
        return decorded_token['data']
        }else{
            return false;
        }
    },
    checkSecureAccount()
    {
        if(localStorage.getItem('yexp@user')) {
            const access_token = localStorage.getItem('yexp@user');
            const decorded_token = this.parseJwt(access_token);
            return decorded_token['data']['secure']
        }else{
            return "UNLOGGED";
        }
    },

    db_date(objDate)
    {
        const month=(objDate.getMonth()+1).toString();
        const newMonth=month.length===1?"0"+month:month

        const day=objDate.getDate().toString();
        const newDay=day.length===1?"0"+day:day

        const newDate=objDate.getFullYear().toString() + "-" + newMonth + "-" + newDay
        return newDate;
    },
    simple_date()
    {
        const longDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const longMonths=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const today=new Date();
        const day=today.getDate().toString();
        const newDay=day.length===1?"0"+day:day
        const date=longDays[today.getDay()] + ', ' + newDay+ ' '+ longMonths[today.getMonth()];
        return date;

    },

    uCfirst(string) 
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },

    baseValue(value)
    {
        if(value<10)
        {
            return 0;
        }else if(value<20)
        {
            return 10;
        }else if(value<30)
        {
            return 20;
        }else if(value<40)
        {
            return 30;
        }else if(value<50)
        {
            return 40;
        }else if(value<60)
        {
            return 50;
        }else if(value<70)
        {
            return 60;
        }else if(value<80)
        {
            return 70;
        }else if(value<90)
        {
            return 80
        }
        else if(value<100)
        {
            return 90;
        }else{
            return 100;
        }
    },
    handleFocus(event){
        event.target.select()
    },
    findInObject(object, value) { 
        for(var i=0; i<object.length; i++)
        {
          var exists=object[i].code===value;
            if(exists)
            {
                return true
            }
        }

        return false;
       
    },
    getSiblings(elem) {

        // Setup siblings array and get the first sibling
        var siblings = [];
        var sibling = elem.parentNode.firstChild;
    
        // Loop through each sibling and push to the array
        while (sibling) {
            if (sibling.nodeType === 1 && sibling !== elem) {
                siblings.push(sibling);
            }
            sibling = sibling.nextSibling
        }
    
        return siblings;
    
    },
    removeClassFromElementSiblings(elem, selectorClass)
    {

         // Setup siblings array and get the first sibling
         var siblings = [];
         var sibling = elem.parentNode.firstChild;
     
         // Loop through each sibling and push to the array
         while (sibling) {
             if (sibling.nodeType === 1 && sibling !== elem) {
                sibling.classList.remove(selectorClass)
             }
             sibling = sibling.nextSibling
         }

    },
    closeSystemDrawer(){
        document.getElementById('system_drawer').classList.remove('sidebar-open')
    },
    removeClassFromElements(elementClass, selectorClass)
    {
         // Setup siblings array and get the first sibling
         var sibling = document.getElementsByClassName(elementClass);
     
            for(var i=0; i<sibling.length; i++)
            {
                sibling[i].classList.remove(selectorClass)
            }
    },
    closeHeaderDropdowns(){
        var sibling = document.getElementsByClassName('header-dropdown');
     
        for(var i=0; i<sibling.length; i++)
        {
            sibling[i].classList.remove('show')
        }
    },

    hide(id)
    {
        document.getElementById(id).style.display='none'
    },

    /**
     * 
     * Closes all models
     */
    closePopup(id)
    {
        // $("#"+id).modal('hide');
        const drop =document.querySelector("#modal-backcover-1");
        const modals = document.getElementsByClassName("sys-modal");
        for(var i=0; i<modals.length; i++){
            modals[i].style.display = 'none';
            modals[i].classList.remove('show');
        }
        drop.classList.remove("modal-backdrop", "fade", "show");
        document.body.classList.remove('modal-open');
        document.body.style=""
    },
    openPopup(id)
    {
    //    $("#"+id).modal('show');
        const drop =document.querySelector("#modal-backcover-1");
        drop.classList.add("modal-backdrop",  "fade", "show");

        const modal = document.querySelector("#" + id);
        if (modal) {
            modal.style.display = 'block';
            modal.classList.add('show');
            document.body.classList.add('modal-open');
            document.body.style="overflow: hidden; padding-right: 0px;"
        }
    },

    printElement(ele) {

    var sOption="toolbar=no,location=no,directories=no,menubar=no,scrollbars=yes,width=300,height=600,left=100,top=25";

       var sWinHTML = document.getElementById(ele).innerHTML;
       var winprint=window.open("","Print",sOption);
           winprint.document.open();
           winprint.document.write('<!DOCTYPE html>');
           winprint.document.write('<html lang="en">');
           winprint.document.write('<head>');
           winprint.document.write('<meta charset="UTF-8">');
           winprint.document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
           winprint.document.write('<title>QuickPost Report</title>');
           winprint.document.write('<style>');
           winprint.document.write('body {font-family: Arial, sans-serif; margin: 0; padding: 0;}');
           winprint.document.write('.letterhead {display: flex; align-items: center; padding: 20px;border-bottom: 2px solid #000;}');
           winprint.document.write('.logo {margin-right: 20px;}');
           winprint.document.write('.logo img {max-width: 100px;height: auto;}');
           winprint.document.write('.bank-info {flex-grow: 1;}');
           winprint.document.write('.bank-name {font-size: 20px;font-weight: bold;}');
           winprint.document.write('.customer-info {margin-top: 10px;}');
           winprint.document.write('.statement {padding: 20px;}');
           winprint.document.write('table {font-size: 12px; width: 100%; border-collapse: collapse; margin-top: 20px;}');
           winprint.document.write('th, td {border: 1px solid #000; padding: 8px; text-align: left;}');
           winprint.document.write('th {background-color: #f2f2f2;}');

           winprint.document.write('</style>');
           winprint.document.write('</head>');
           winprint.document.write('<body onload="window.print();">');
           winprint.document.write(sWinHTML);
           winprint.document.write('</body></html>');
           winprint.document.close();
           winprint.focus();
           //winprint.close();border: 1px solid #F5F5F5;
    },

    getHost(){
    
        switch(process.env.REACT_APP_ENVIRONMENT)
        {
            case "PRODUCTION":
                return process.env.REACT_APP_PRODUCTIONURL
            case "TEST":
                return process.env.REACT_APP_TESTURL

            default:
                return process.env.REACT_APP_DEVELOPMENTURL
        }
        
        
    },


    getCaptiveHost(){
    
        switch(process.env.REACT_APP_ENVIRONMENT)
        {
            case "PRODUCTION":
                return process.env.REACT_APP_PRODUCTIONURL
            case "TEST":
                return process.env.REACT_APP_TESTURL
    
            default:
                return process.env.REACT_APP_DEVELOPMENTURL
        }
        
    },

    isObject(variable) {
        return Object.prototype.toString.call(variable) === "[object Object]";
    },

    formatToast(title, body){

        return {
            title: title,
            body: body
        }
    },

    /**
     * 
     * Returns true if none of the values in the object is blank. Returns false of any of the values in the object is blank
     */
    objectIsComplete(obj) {
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            const value =obj[key].toString();
            if (value === null || value === undefined || value.trim() === '') {
              return false;
            }
          }
        }
        return true;
      },

    numberFormat(number) {
        if (isNaN(number)) {
            return "Invalid number"; // Handle invalid input
        }
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    formatDate(dateString) {
        // Parse the input date string
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
        // Check if the input contains time (datetime format)
        const hasTime = dateString.includes("T") || dateString.includes(" ");
    
        if (hasTime) {
            // Handle datetime format
            const [datePart, timePart] = dateString.split(/[T ]/); // Split by "T" or space
            const [year, month, day] = datePart.split("-");
            let [hours, minutes] = timePart.split(":");
    
            // Convert hours to 12-hour format and determine AM/PM
            const isPM = parseInt(hours, 10) >= 12;
            hours = (parseInt(hours, 10) % 12) || 12; // Convert 0 or 24-hour to 12-hour format
            const formattedTime = `${hours}:${minutes}${isPM ? "pm" : "am"}`;
    
            // Format the date with time
            return `${day}-${months[parseInt(month, 10) - 1]}-${year} ${formattedTime}`;
        } else {
            // Handle date-only format
            const [year, month, day] = dateString.split("-");
            return `${day}-${months[parseInt(month, 10) - 1]}-${year}`;
        }
    }
    
    
}