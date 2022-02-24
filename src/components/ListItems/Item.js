import Item from "../ItemDetail/ItemDetail"

export const Items = [
    { id: 1, title: 'Tacos Clasicos F50 Azules', price: 'usd 95', category: 'clasicos', thumbnail: 'https://www.dhresource.com/webp/m/0x0/f2/albu/g13/M01/DF/C4/rBVak187Wm6AW7niAATSZA1Tjuw859.jpg/hot-classics-x-506-f50-tunit-fg-restoring.jpg', stock: 15, descripcion: 'Descripcion de Tacos Clasicos Adidas F50 Azules' },
    { id: 2, title: 'Tacos Clasicos TOTAL 90', price: 'usd 150', category: 'clasicos', thumbnail: 'https://img.clasf.mx/2020/10/12/Nike-Total-90-III-20201012035915.1101030015.jpg', stock: 29, descripcion: 'Descripcion de Tacos Clasicos TOTAL 90' },
    { id: 3, title: 'Tacos Clasicos Adidas COPA MUNDIAL', price: 'usd 210', category: 'clasicos', thumbnail: 'https://img.mx.class.posot.com/es_mx/2018/03/17/Tachones-adidas-Copa-Mundial-20180317104941.jpg', stock: 20, descripcion: 'Descripcion de Tacos COPA MUNDIAL' },
    { id: 4, title: 'Tacos Clasicos F50 Rojos', price: 'usd 95', category: 'clasicos', thumbnail: 'https://stadium-azteca.underdog.gs/soccerly/1/2019/03/30/1553957402.jpg', stock: 10, descripcion: 'Descripcion de Tacos Clasicos Adidas F50 Rojos' },
    { id: 5, title: 'Tacos Clasicos Nike', price: 'usd 95', category: 'clasicos', thumbnail: 'https://stadium-azteca.underdog.gs/soccerly/1/2017/11/03/1509732351.jpg', stock: 10, descripcion: 'Descripcion de Tacos Clasicos Adidas blancos' },
    { id: 6, title: 'Tacos Clase A nike phantom', price: 'usd 175', category: 'claseA', thumbnail: 'https://www.ertheo.com/blog/wp-content/uploads/2017/09/botaSG-nike-phantom-vision-ii-Eden-Hazard-temporada-2019-2020-3-300x286.jpg', stock: 15, descripcion: 'Descripcion de Tacos Clase A Phantom' },
    { id: 7, title: 'Tacos Clase A nike botines', price: 'usd 200', category: 'claseA', thumbnail: 'https://i.pinimg.com/236x/bc/f9/af/bcf9af1bf9e0aec91058b11d4d1ca867.jpg', stock: 29, descripcion: 'Descripcion de Tacos Clase A botines' },
    { id: 8, title: 'Tacos Clase A Nike Tiempo', price: 'usd 210', category: 'claseA', thumbnail: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b3ec2d29-70c7-4dfd-86f6-e35dd87dd6d1/calzado-de-f%C3%BAtbol-para-superficies-m%C3%BAltiples-talla-peque%C3%B1a-grande-jr-tiempo-legend-9-club-mg-bkh7M1.png', stock: 20, descripcion: 'Descripcion de Tacos Clase A Nike Tiempo' },
    { id: 9, title: 'Tacos Clase A nike mercurial superfly', price: 'usd 230', category: 'claseA', thumbnail: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/190c8706-e14c-491d-9772-3cdc816c32f5/calzado-de-f%C3%BAtbol-para-terrenos-m%C3%BAltiples-mercurial-superfly-8-academy-mg-vRjB06.png', stock: 29, descripcion: 'Descripcion de Tacos Clase A mercurial superfly' },
    { id: 10, title: 'Tacos Clase A adidas X 19.1', price: 'usd 190', category: 'claseA', thumbnail: 'https://www.dhresource.com/0x0/f2/albu/g9/M00/61/77/rBVaVV1zWfWAUSJmAAJK9XFocZI918.jpg', stock: 29, descripcion: 'Descripcion de Tacos Clase A adidas X 19.1' },
    { id: 11, title: 'camiseta de puyol', price: 'usd 55', category: 'camiseta', thumbnail: 'https://www.dhresource.com/0x0/f2/albu/g21/M01/DB/A0/rBNaOWGThEiAFKj1AAezyLuDhAY686.jpg/link-for-payment-please-contact-us-to-confirm.jpg', stock: 15, descripcion: 'Camiseta de Puyol Barcelona' },
    { id: 12, title: 'Camiseta de Ronaldo', price: 'usd 75', category: 'camiseta', thumbnail: 'https://img.clasf.pe/2019/07/29/Camiseta-Brasil-Mundial-Francia-98-A1-20190729035153.9472310015.jpg', stock: 29, descripcion: 'Camiseta de Ronaldo Brasil' },
    { id: 13, title: 'Camiseta de Ronaldinho', price: 'usd 80', category: 'camiseta', thumbnail: 'https://img.clasf.pe/2019/07/29/Camiseta-Ronaldhino-Barcelona-2006-A1-20190729034306.4416290015.jpg', stock: 20, descripcion: 'Camiseta de Ronaldinho Barcelona' },
    { id: 14, title: 'Camiseta de Messi', price: 'usd 90', category: 'camiseta', thumbnail: 'https://m.media-amazon.com/images/I/51mIpqShSDL._AC_UX679_.jpg', stock: 29, descripcion: 'Camiseta de Messi Barcelona' },
    { id: 15, title: 'Camiseta de CR7', price: 'usd 90', category: 'camiseta', thumbnail: 'https://s1.eestatic.com/2018/07/13/elbernabeu/real-madrid/futbol/futbol_322232730_91145245_1706x960.jpg', stock: 29, descripcion: 'Camiseta de CR7 Juventus' },
    { id: 16, title: 'Espinilleras Adidas Azules', price: 'usd 35', category: 'espinilleras', thumbnail: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/2681ce58a729499fbd12a8af00b30c48_9366/Espinilleras_Lesto_10_Messi_Azul_CW9707_01_standard.jpg', stock: 15, descripcion: 'Espinilleras Adidas Azules' },
    { id: 17, title: 'Espinilleras Nike mercurial lite', price: 'usd 65', category: 'espinilleras', thumbnail: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a2340d6d-2f8c-4179-9843-ddd7d6ef36a4/protecciones-para-pierna-de-f%C3%BAtbol-mercurial-lite-sQBtPc.png', stock: 29, descripcion: 'Espinilleras Mercurial Lite Nike' },
    { id: 18, title: 'Espinilleras PSG Nike', price: 'usd 60', category: 'espinilleras', thumbnail: 'https://media.futbolmania.com/media/catalog/product/cache/1/image/0f330055bc18e2dda592b4a7c3a0ea22/d/c/dc2408-410_imagen-de-las-esopinilleras-de-futbol-con-medias-nike-mercurial-lite-2021-2022-azul_1_frontal.jpg', stock: 20, descripcion: 'Espinilleras PSG Nike' },
    { id: 19, title: 'Espinilleras Barcelona Nike', price: 'usd 55', category: 'espinilleras', thumbnail: 'https://m.media-amazon.com/images/I/61eezT4mD2L._AC_SL1000_.jpg', stock: 29, descripcion: 'Espinilleras Barcelona Nike' },
    { id: 20, title: 'Espinilleras Adidas Predator League', price: 'usd 50', category: 'espinilleras', thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHyTX3-fTC8bKiuSVcV9KMBLZG-iZBsIoveA&usqp=CAU', stock: 29, descripcion: 'Espinilleras Adidas' }
]


//simulacion de llamada a API
/*export const getItems = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Items)
        })
    }, 2000)
}*/

export const getItems = (category) => {
    return new Promise((resolve) => {
        let response = [];
        if (category === undefined) {
            response = Items
        } else {
            response = Items.filter(i => {
                return i.category == category
            })
        }
        setTimeout(() => {
            resolve(response)
        })
    }, 2000)
}


export const DetalleItem = (id) => {
    return new Promise((resolve) => {
        const prod = Items.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 1000)
    })
}
