import { Box, Flex } from 'native-base'
import React from 'react'
import { Header, SearchComponent, Card } from '../../components'

const data = [
  {
    area: 'Anna Nagar',
    place: 'VR Mall',
    Distance: '20Km',
    image:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hiveworkspaces.com%2Fthe-hive-at-anna-nagar%2F&psig=AOvVaw047TG0kQv2kXcadblUi2Mg&ust=1668193013838000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPjP1ralpPsCFQAAAAAdAAAAABAD',
  },
  {
    area: 'T Nagar',
    place: 'Saravana Store',
    Distance: '30Km',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-TJGZZhYXAUjZ80052cxbRxQqbfaGvMJJQI7m4A1Ei6fA-fOAfv90D5Ckm5k0Y508Rs&usqp=CAU',
  },
  {
    area: 'Velachery',
    place: 'Phoenix mall',
    Distance: '40Km',
    image:
      'https://files.lbb.in/media/2020/01/5e142a443c06fc78e30f89a9_1578379844312.jpg',
  },
  {
    area: 'Anna Nagar',
    place: 'VR Mall',
    Distance: '20Km',
    image:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hiveworkspaces.com%2Fthe-hive-at-anna-nagar%2F&psig=AOvVaw047TG0kQv2kXcadblUi2Mg&ust=1668193013838000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPjP1ralpPsCFQAAAAAdAAAAABAD',
  },
  {
    area: 'Anna Nagar',
    place: 'VR Mall',
    Distance: '20Km',
    image:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hiveworkspaces.com%2Fthe-hive-at-anna-nagar%2F&psig=AOvVaw047TG0kQv2kXcadblUi2Mg&ust=1668193013838000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPjP1ralpPsCFQAAAAAdAAAAABAD',
  },
]
const Home = () => {
  return (
    <>
      <Header />
      <SearchComponent />
      <Flex
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '0px 30px',
          justifyContent: 'center',
        }}
        p='20px'
      >
        {data.map((item) => (
          <Card />
        ))}
      </Flex>
    </>
  )
}

export default Home
