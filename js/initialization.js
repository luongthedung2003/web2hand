//Khoi tao danh sach san pham
function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: '1',
            img: './assets/img/products/',
            category: 'Thời trang',
            price: 200000,
            desc: '.'
        },
        {
            id: 2,
            status: 1, 
            title: '2',
            img: './assets/img/products/.png',
            category: 'Đồ điện tử',
            price: 180000,
            desc: '.'
        },
        {
            id: 3,
            status: 1, 
            title: '3',
            img: './assets/img/products/.jpeg',
            category: 'Xe',
            price: 180000,
            desc: ''
        },
        {
            id: 4,
            status: 1, 
            title: '4',
            img: './assets/img/products/.jpeg',
            category: 'Đồ dùng học tập',
            price: 180000,
            desc: ''
        },
        {
            id: 3,
            status: 1, 
            title: '3',
            img: './assets/img/products/.jpeg',
            category: 'Đồ gia dụng',
            price: 180000,
            desc: ''
        },
        {
            id: 4,
            status: 1, 
            title: '4',
            img: './assets/img/products/jpg',
            category: 'Đồ nội thất',
            price: 100000,
            desc: '.'
        },
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin account 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Lương Thế Dũng",
            phone: "thedung2003",
            password: "123456",
            address: '...',
            email: '...',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        accounts.push({
            fullname: "Lương Thế Dũng",
            phone: "0123456789",
            password: "123456",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
}

window.onload = createProduct();
window.onload = createAdminAccount();