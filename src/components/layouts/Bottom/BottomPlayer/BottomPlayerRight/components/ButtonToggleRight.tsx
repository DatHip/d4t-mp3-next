import BoxHoverAction from '@/components/common/BoxHoverAction'
import { useDisclosure } from '@mantine/hooks'
import { Drawer } from '@mantine/core'
const ButtonToggleRight = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)

  return (
    <>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size={'30%'}
        padding={0}
        zIndex={1000}
        position='right'
        withOverlay={false}
        classNames={{
          header: 'hidden',
          content:
            'max-h-[calc(100%_-_91px)] bg-[var(--layout-bg)] border-l-[1px] border-solid border-[var(--border-primary)] box-shadow-queue'
        }}
      ></Drawer>
      <BoxHoverAction
        onClick={toggleDrawer}
        className={`${
          drawerOpened
            ? 'text-white] bg-[var(--purple-primary)]'
            : 'bg-[hsla(0,0%,100%,.1)] text-[var(--player-text)]'
        } hover:bg-bg-[hsla(0,0%,100%,.2) rounded-md `}
        content='Danh sách phát'
      >
        <div className='h-6 '>
          <i className='icon ic-list-music !text-base'></i>
        </div>
      </BoxHoverAction>
    </>
  )
}

export default ButtonToggleRight
