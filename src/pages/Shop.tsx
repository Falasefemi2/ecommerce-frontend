import { Link} from "react-router-dom"
import axios from "../api/axios"
import Button from "../components/Button"
import Text from "../components/Test"
import { useQuery } from "@tanstack/react-query"
import useGlobalStore from "../store"
import { toast } from "react-hot-toast"




const Shop = () => {

  const {addItemToCart} = useGlobalStore()

  const getProducts = (): Promise<IProduct[]> =>
    axios.get("/products").then((response) => response.data)

  const { data } = useQuery({ queryKey: ['products'], queryFn: getProducts })

  return (
    <>
      <section className="relative w-full h-[768px] flex items-end">
        <img
          className="absolute -z-10 aspect-[1.6] object-cover"
          src="https://res.cloudinary.com/dbspz5tmg/image/upload/v1679743570/youtube/2023/march/komorebi-development/young-person-wearing-hoodie-mockup_1_2_exnour.png"
          alt=""
        />
        <div className="mx-[50px] mb-40">
          <Text variant="heading-three" className="mb-3">
            Latest hoodie styles online
          </Text>
          <Text variant="body-two">Suit your unique preferences</Text>
        </div>
      </section>
      <section className="mx-[50px] bg-white">
        <Text variant="heading-one" className="mt-[82px]">
          Experience comfort and style
        </Text>
        <Text variant="body-two" className="mb-[80px]">
          Perfect blend of comfort, style, and quality materials
        </Text>
        <div className="grid grid-cols-3 gap-[38px] mb-[180px]">
          {data?.map((prodItem) => (
            <div key={prodItem._id}>
              <Link to={`/shop/${prodItem._id}`}>
                <div className="rounded-[18px]">
                  <img src={prodItem.image} alt="" width={368}
                    height={368}
                    className="w-[368px] h-[368px]" />
                </div>
              </Link>
              <Text variant="heading-three" className="mt-7 mb-2">
                  {prodItem.name}
                </Text>
                <Text variant="body-three">$ {prodItem.price}</Text>
                <Button size="small" className="mt-7" onClick={() => {
                  const cartItem: RawCartItem = {
                    image: prodItem.image,
                    name: prodItem.name,
                    price: prodItem.price,
                    product: prodItem._id,
                  }
                  addItemToCart(cartItem)
                  toast.success("Item added to cart")
                }}>Add to bag</Button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Shop