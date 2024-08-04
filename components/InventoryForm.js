// components/PantryForm.js
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, updateDoc, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { Box, TextField, Button, Typography, Stack } from "@mui/material";

const InventoryForm = ({ selectedInventoryItem, setSelectedInventoryItem }) => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");

    useEffect(() => {
        if (selectedInventoryItem) {
            setName(selectedInventoryItem.name);
            setQuantity(selectedInventoryItem.quantity);
        }
    }, [selectedInventoryItem]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedInventoryItem) {
            const InventoryRef = doc(db, "inventoryItems", selectedInventoryItem.id);
            await updateDoc(InventoryRef, { name, quantity });
            setSelectedInventoryItem(null);
        } else {
            await addDoc(collection(db, "inventoryItems"), { name, quantity });
        }
        setName("");
        setQuantity("");
    };

    const handleDelete = async () => {
        const InventoryRef = doc(db, "inventoryItems", selectedInventoryItem.id);
        await deleteDoc(InventoryRef);
        setSelectedInventoryItem(null);
        setName("");
        setQuantity("");
    };

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <TextField
                        label="Item Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <TextField
                        label="Quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary">
                        {selectedInventoryItem ? "Update Item" : "Add Item"}
                    </Button>
                    {selectedInventoryItem && (
                        <Button variant="contained" color="secondary" onClick={handleDelete}>
                            Delete Item
                        </Button>
                    )}
                </Stack>
            </form>
        </Box>
    );
};

export default InventoryForm;
