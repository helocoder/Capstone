import React from "react";
import { Avatar, Box, Text } from "@chakra-ui/react";
import { MdAlternateEmail } from "react-icons/md";

const UserListItem = ({ user, handleFunction }) => {
  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="#fb7d10"
      transition="200ms ease-in-out"
      _hover={{
        background: "#D1D1D1",
        color: "black",
      }}
      w="100%"
      d="flex"
      alignItems="center"
      color="white"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={user.name}
        src={user.image}
      />
      <Box>
        <Text fontWeight="bold">{user.name} </Text>
        <Text fontSize="sm" d="flex" alignItems="center">
          <b>
            <MdAlternateEmail />
          </b>
            {user.email}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
