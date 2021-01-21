import React, { useState } from 'react'
import { Text, Card } from 'react-native-paper'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Collapsible from 'react-native-collapsible'

const CollapsibleCard = ({ children, heading }) => {
  const [isCollapsed, setCollapsed] = useState(true)
  const collapse = () => {
    setCollapsed(!isCollapsed)
  }
  return (
    <>
      <Card style={styles.Card}>
        <TouchableOpacity
          onPress={() => {
            collapse()
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: 18
            }}
          >
            <Text
              style={{
                ...styles.CardHeading,
                fontWeight: isCollapsed ? 'normal' : 'bold'
              }}
            >
              {heading}
            </Text>
            <MaterialCommunityIcons
              style={{
                transform: [{ rotate: isCollapsed ? '360deg' : '180deg' }]
              }}
              name="chevron-down-circle"
              size={24}
              color="black"
            />
          </View>
        </TouchableOpacity>
        <Collapsible
          collapsed={isCollapsed}
          style={{ paddingHorizontal: 32, paddingBottom: 25 }}
        >
          {children}
        </Collapsible>
      </Card>
    </>
  )
}

const styles = StyleSheet.create({
  CardHeading: {
    fontSize: 18,
    color: '#3e3e3e'
  },
  Card: {
    borderRadius: 8,
    backgroundColor: '#e5e5e5'
  }
})

export default CollapsibleCard
