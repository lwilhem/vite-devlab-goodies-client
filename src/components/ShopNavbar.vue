<script>
import { TagIcon, CollectionIcon, FireIcon, CubeTransparentIcon, MenuAlt2Icon} from '@heroicons/vue/solid'
import { ShoppingBagIcon, CogIcon } from '@heroicons/vue/outline'
import { Menu, MenuItems, MenuItem, MenuButton } from '@headlessui/vue'

export default {
    components: {
        TagIcon,
        CollectionIcon,
        FireIcon,
        CubeTransparentIcon,
        ShoppingBagIcon,
        CogIcon,
        MenuAlt2Icon,
        Menu,
        MenuItems,
        MenuItem,
        MenuButton
    }
}
</script>

<template>
    <header class="w-full">
        <Menu>
            <MenuButton class="p-4">
                <MenuAlt2Icon class="w-12 h-12"></MenuAlt2Icon>
            </MenuButton>
            <MenuItems class="h-screen bg-slate-400 w-72">
                <MenuItem class="w-72 h-12 flex justify-between items-center p-6">
                    <a href="#" class="text-center text-sm uppercase">
                        Les Nouveautés
                        <TagIcon class="w-12 h-12 px-2"></TagIcon>
                    </a>
                </MenuItem>
                <MenuItem class="w-72 h-12 flex justify-between items-center p-6">
                    <a href="#" class="text-center text-sm uppercase">
                        Découvrez les Assos
                        <CollectionIcon class="w-12 h-12 px-2"></CollectionIcon>
                    </a>
                </MenuItem>
                <MenuItem class="w-72 h-12 flex justify-between items-center p-6">
                    <a href="#" class="text-center text-sm uppercase">
                        à Propos
                        <FireIcon class="w-12 h-12 px-2"></FireIcon>
                    </a>
                </MenuItem>
                <MenuItem class="w-72 h-12 flex justify-between items-center p-6">
                    <a href="#" class="text-center text-sm uppercase">
                        LE SHOP
                        <CubeTransparentIcon class="w-12 h-12 px-2"></CubeTransparentIcon>
                    </a>
                </MenuItem>
            </MenuItems>
        </Menu>
    </header>
</template>