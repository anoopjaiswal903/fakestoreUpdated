import {
  Switcher,
  Notification,
  UserAvatar,
  ShoppingCart,
} from "@carbon/react/icons";

import {
  Header,
  HeaderContainer,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
} from "@carbon/react";

import "./header.scss";
import { Link } from "react-router-dom";

function TutorialHeader() {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Carbon Tutorial">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          {/* <HeaderName href="/" prefix="IBM">
          FAKE STORE
        </HeaderName> */}

          <HeaderNavigation aria-label="Carbon Tutorial">
            <HeaderMenuItem href="/">FAKE STORE</HeaderMenuItem>
            <HeaderMenuItem element={Link} to="/cartView">
              <ShoppingCart size={30} />
            </HeaderMenuItem>
            <HeaderMenuItem element={Link} to="/testpage">
              Style Test
            </HeaderMenuItem>
          </HeaderNavigation>

          <HeaderGlobalBar>
            <HeaderGlobalAction
              aria-label="Notifications"
              tooltipAlignment="center"
            >
              <Notification size={30} />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="User Avatar"
              tooltipAlignment="center"
            >
              <UserAvatar size={30} />
            </HeaderGlobalAction>

            <HeaderGlobalAction
              aria-label="App Switcher"
              tooltipAlignment="end"
            >
              <Switcher size={30} />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      )}
    />
  );
}
export default TutorialHeader;
