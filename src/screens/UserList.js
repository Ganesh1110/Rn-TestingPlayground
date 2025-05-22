import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getUsers } from "../services/jsonPlaceholder";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers()
      .then(setUsers)
      .catch((e) => setError(e.message));
  }, []);

  if (error) return <Text testID="error">{error}</Text>;
  if (!users.length) return <Text>Loading...</Text>;

  return (
    <View>
      {users.map((user) => (
        <Text key={user.id} testID="user">
          {user.name}
        </Text>
      ))}
    </View>
  );
}
