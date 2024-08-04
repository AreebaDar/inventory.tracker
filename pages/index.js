// pages/index.js
import { useState } from "react";
import InventoryForm from "../components/InventoryForm";
import InventoryList from "../components/InventoryList";
import { Box, Typography, Container } from "@mui/material";

export default function Home() {
    const [selectedInventoryItem, setSelectedInventoryItem] = useState(null);

    return (
      
      
        <Container >
            <Box textAlign="center" my={4}>
                <Typography variant="h2">Inventory Tracker</Typography>
            </Box>
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between" mb={4}>
                <Box width={{ xs: '100%', md: '45%' }} mb={{ xs: 4, md: 0 }}>
                    <Typography variant="h4" mb={2}>Add / Update Item</Typography>
                    <InventoryForm
                        selectedInventoryItem={selectedInventoryItem}
                        setSelectedInventoryItem={setSelectedInventoryItem}
                    />
                </Box>
                <Box width={{ xs: '100%', md: '45%' }}>
                    <Typography variant="h4" >Inventory Items</Typography>
                    <InventoryList setSelectedInventoryItem={setSelectedInventoryItem} />
                </Box>
            </Box>
        </Container>
    );
}
