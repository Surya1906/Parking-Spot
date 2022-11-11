import React, { useState } from 'react'
import { Box, Flex, Pressable } from 'native-base'
import { Header, SearchComponent, Card } from '../../components'
import { Link } from 'react-router-dom'

const data = [
  {
    area: 'Anna Nagar',
    place: 'VR Mall',
    distance: '20 Km',
    image: 'https://im.whatshot.in/img/2020/Jul/vr-chennai-1-1594373027.jpg',
    charging_slot_available: '5',
  },
  {
    area: 'T Nagar',
    place: 'Saravana Store',
    distance: '30 Km',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-TJGZZhYXAUjZ80052cxbRxQqbfaGvMJJQI7m4A1Ei6fA-fOAfv90D5Ckm5k0Y508Rs&usqp=CAU',
    charging_slot_available: '10',
  },
  {
    area: 'Velachery',
    place: 'Phoenix mall',
    distance: '40 Km',
    image:
      'https://files.lbb.in/media/2020/01/5e142a443c06fc78e30f89a9_1578379844312.jpg',
    charging_slot_available: '7',
  },
  {
    area: 'Thousand Lights',
    place: 'Express Avenue',
    distance: '50 Km',
    image: 'https://expressavenue.in/images/contact-ea.jpg',
    charging_slot_available: '9',
  },
  {
    area: 'Vadapalani',
    place: 'Nexus Forum Vijaya Mall',
    distance: '60 Km',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/a5/e9/5f/forum-vijaya-mall.jpg?w=1200&h=1200&s=1',
    charging_slot_available: '4',
  },
]

const Home = () => {
  const [selectedCard, setSelectedCard] = useState({
    area: 'No Data',
    place: 'No Data',
    distance: 'No Data',
    image:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3D%2522no%2Bdata%2522&psig=AOvVaw09gX0E7r6j3HR29AgUlKvr&ust=1668228505253000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIjgus2ppfsCFQAAAAAdAAAAABAE',
    charging_slot_available: '4',
  })
  return (
    <>
      <Header />
      <SearchComponent />
      <Flex
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '0px 30px',
          justifyContent: 'center',
        }}
        p='20px'
      >
        {data.map((item) => {
          return (
            <Pressable
              onPress={() => {
                console.log('Pressed')
                setSelectedCard(item)
              }}
            >
              <Link to='/detailpage' style={{ textDecoration: 'none' }}>
                <Card item={item} />
              </Link>
            </Pressable>
          )
        })}
      </Flex>
    </>
  )
}

export default Home
