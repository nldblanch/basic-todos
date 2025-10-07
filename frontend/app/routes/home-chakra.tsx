import type { Route } from "../+types/root";
import { Provider } from "~/components/ui/provider"
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react"
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Home - Chakra UI" },
        { name: "description", content: "Thehome page built with MUI" },
    ];
}

export default function HomeChakraUi() {
    return <Provider>
        <Box p={4}>
            <Heading>Chakra UI Page</Heading>
            <Text mt={4}>Content goes here</Text>
        </Box>
    </Provider>
}