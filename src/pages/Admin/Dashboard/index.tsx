import { AppShell, Navbar, Text } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function DashboardPage() {
  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
          <Sidebar />
        </Navbar>
      }
      // footer={
      //   <Footer height={60} p="md">
      //     Application footer
      //   </Footer>
      // }
      // header={
      //   <Header height={{ base: 50, md: 70 }} p="md">
      //     <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      //       <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
      //         <Burger
      //           opened={opened}
      //           onClick={() => setOpened((o) => !o)}
      //           size="sm"
      //           color={theme.colors.gray[6]}
      //           mr="xl"
      //         />
      //       </MediaQuery>

      //       <Text>Application header</Text>
      //     </div>
      //   </Header>
      // }
    >
      <Text>
        <Outlet />
      </Text>
    </AppShell>
  );
}
