var data = JSON.parse(localStorage.getItem("billingData")) || [];
tracking(data);

function tracking(){
    data.map(function(item,index){

        var tr = document.createElement("tr");

        var date = document.createElement("td");
        data.textContent = "Jan-26-2022";

        var orderNo = document.createElement("td");
        orderNo.textContent = 6524378214368+index;

        var des = document.createElement("td");
        des.textContent = item.address;

        var status = document.createElement("td");
        status.textContent = "Processing";


        tr.append(date,orderNo,des,status);

        document.querySelector("tbody").append(tr);

    })
}