document.getElementById('button1').addEventListener('click', loadCustomer);
// document.getElementById('button2').addEventListener('click', loadCustomers);

// Load Single Customer
function loadCustomer() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);

            const customer = JSON.parse(this.responseText);
            const output = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>NAME: ${customer.name}</li>
                    <li>COMPANY: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
            `;

            document.getElementById('customer').innerHTML = output;
            
        }
        
    }
    function loadCustomers() {
        const xhr = new XMLHttpRequest();
            xhr.open('GET', 'customers.json', true);

            xhr.onload = function(){
                if(this.status === 200){
                    const customers = JSON.parse(this.responseText);

                    let output = '';
                    customers.forEach(function(customer){
                        
                        
                        output += `
                        <ul>
                        <li>ID: ${customer.id}</li>
                        <li>NAME: ${customer.name}</li>
                        <li>COMPANY: ${customer.company}</li>
                        <li>Phone: ${customer.phone}</li>
                    </ul>
                `;
                    document.getElementById('customers').innerHTML = output;
                });
            }
        }
                 
            
   xhr.send();
    }
