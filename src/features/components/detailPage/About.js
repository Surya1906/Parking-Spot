import { Box, Flex, Heading, Text } from 'native-base'
import React, { useState, useEffect } from 'react'
import { DateTimePicker } from 'react-rainbow-components'
import { DropDown } from '../../../assets'

const About = () => {
  const [startTime, setStartTime] = useState(new Date())
  const [endTime, setEndTime] = useState(new Date())
  const [difference, setDifference] = useState('0 hrs : 0 min')
  function padTo2Digits(num) {
    return num.toString().padStart(2, '0')
  }

  function convertMsToHM(milliseconds) {
    if (milliseconds === 0) {
      return '0 hrs : 0 min'
    }
    let seconds = Math.floor(milliseconds / 1000)
    let minutes = Math.floor(seconds / 60)
    let hours = Math.floor(minutes / 60)

    seconds = seconds % 60
    // 👇️ if seconds are greater than 30, round minutes up (optional)
    minutes = seconds >= 30 ? minutes + 1 : minutes

    minutes = (minutes % 60) + 1

    if (minutes >= 60) {
      hours = Math.floor(minutes / 60)
      console.log(hours)
      minutes = Math.ceil((minutes / 60) % 1)
    }

    if (hours >= 23) {
      minutes -= 1
    }
    return `${padTo2Digits(hours)} hrs : ${padTo2Digits(minutes)} min`
  }
  useEffect(() => {
    setDifference(convertMsToHM(endTime.getTime() - startTime.getTime()))
  }, [startTime, endTime])

  return (
    <Box py='2'>
      <Heading color='black'>Timings</Heading>
      <Box>
        <Flex flexDirection='row'></Flex>
      </Box>
      <Flex
        alignItems='center'
        gap='10px'
        rounded='8'
        p='4'
        style={{ border: '1px solid #808080' }}
        mt='3'
      >
        <DateTimePicker
          formatStyle='small'
          label='Start Time'
          borderRadius='square'
          value={startTime}
          onChange={(value) => {
            console.log(value)
            setStartTime(value)
          }}
          icon={<DropDown />}
          style={{ maxWidth: '180px' }}
        />
        <Text color='red.500' bold>
          {`Duration ${difference}`}
        </Text>
        <DateTimePicker
          formatStyle='small'
          label='End Time'
          borderRadius='square'
          value={endTime}
          onChange={(value) => {
            console.log(value)
            setEndTime(value)
          }}
          icon={<DropDown />}
          style={{ maxWidth: '180px' }}
        />
      </Flex>
    </Box>
  )
}

export default About
