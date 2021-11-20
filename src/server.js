import { createServer } from "miragejs"

createServer({
  routes() {
    this.namespace = "api"

    this.get("/products", () => {
      return {
        products: 
           [ 
          { id: 1, title: "Product1"  , image : "https://m.media-amazon.com/images/I/71-Su4Wr0HL._SL1500_.jpg" },
          { id: 2, title: "Product1"  , image : "https://m.media-amazon.com/images/I/71-Su4Wr0HL._SL1500_.jpg"},
          
           ]
       
      }
    })
  },
})