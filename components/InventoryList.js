// components/PantryList.js
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { Box, Typography, Button, Stack, TextField } from "@mui/material";

const InventoryList = ({ setSelectedInventoryItem }) => {
    const [inventoryItems, setInventoryItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "inventoryItems"), (snapshot) => {
            const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setInventoryItems(items);
        });

        return () => unsubscribe();
    }, []);

    const filteredItems = inventoryItems.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Box>
            <TextField
                label="Search Items"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                fullWidth
                margin="normal"
            />
            <Stack spacing={2}>
                {filteredItems.map((item) => (
                    <Box
                        key={item.id}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        padding={2}
                        border="1px solid #ddd"
                        borderRadius="4px"
                    >
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography variant="h6">{item.quantity}</Typography>
                        <Button
                            variant="contained"
                            onClick={() => setSelectedInventoryItem(item)}
                        >
                            Edit
                        </Button>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
};

export default InventoryList;