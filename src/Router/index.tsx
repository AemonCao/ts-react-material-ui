import React from "react";
import clsx from "clsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Game from "../components/Tic-Tac-Toe/Game";
import Clock from "../components/Clock/Clock";
import Toggle from "../components/Toggle/Toggle";
import LoginControl from "../components/LoginControl/LoginControl";
import NameForm from "../components/Form/NameForm";
import EssayForm from "../components/Form/EssayForm";
import FlavorForm from "../components/Form/FlavorForm";
import { Calculator } from "../components/LiftingStateUp/Calculator";
import { WelcomeDialog } from "../components/Composition-vs-Inheritance/WelcomeDialog";
import { SplitPane } from "../components/Composition-vs-Inheritance/SplitPane";
import { Contacts } from "../components/Composition-vs-Inheritance/Contacts";
import { Chat } from "../components/Composition-vs-Inheritance/Chat";
import { SignUpDialog } from "../components/Composition-vs-Inheritance/SignUpDialog";
import { FilterableProductTable } from "../components/Thinking-In-React/FilterableProductTable";
import { TextContext } from "../components/Context/TextContext";
import { Toolbar as MyToolbar } from "../components/Context/Toolbar";

import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  Drawer,
  Divider,
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: { display: "flex" },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: { marginRight: theme.spacing(2) },
    hide: { display: "none" },
    drawer: { width: drawerWidth, flexShrink: 0 },
    drawerPaper: { width: drawerWidth },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const routeList = [
    { path: "/", name: "Home" },
    { path: "/game", name: "Game" },
    { path: "/topics", name: "Topics" },
    { path: "/clock", name: "Clock" },
    { path: "/LoginControl", name: "LoginControl" },
    { path: "/NameForm", name: "NameForm" },
    { path: "/EssayForm", name: "EssayForm" },
    { path: "/FlavorForm", name: "FlavorForm" },
    { path: "/Calculator", name: "Lifting State Up" },
    { path: "/Composition-vs-Inheritance", name: "Composition-vs-Inheritance" },
    { path: "/Thinking-In-React", name: "Thinking-In-React" },
    { path: "/Context", name: "Context" },
  ];

  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              News
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{ paper: classes.drawerPaper }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {routeList.map((roter, index) => (
              <ListItem
                key={roter.path}
                button
                component={Link}
                to={roter.path}
              >
                <ListItemText primary={roter.name} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, { [classes.contentShift]: open })}
        >
          <div className={classes.drawerHeader} />
          <div>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/Context">
                <TextContext.Provider value="context">
                  <MyToolbar></MyToolbar>
                </TextContext.Provider>
              </Route>
              <Route path="/Thinking-In-React">
                <FilterableProductTable
                  products={[
                    {
                      category: "Sporting Goods",
                      price: "$49.99",
                      stocked: true,
                      name: "Football",
                    },
                    {
                      category: "Sporting Goods",
                      price: "$9.99",
                      stocked: true,
                      name: "Baseball",
                    },
                    {
                      category: "Sporting Goods",
                      price: "$29.99",
                      stocked: false,
                      name: "Basketball",
                    },
                    {
                      category: "Electronics",
                      price: "$99.99",
                      stocked: true,
                      name: "iPod Touch",
                    },
                    {
                      category: "Electronics",
                      price: "$399.99",
                      stocked: false,
                      name: "iPhone 5",
                    },
                    {
                      category: "Electronics",
                      price: "$199.99",
                      stocked: true,
                      name: "Nexus 7",
                    },
                  ]}
                ></FilterableProductTable>
              </Route>
              <Route path="/Composition-vs-Inheritance">
                <WelcomeDialog />
                <SplitPane left={<Contacts />} right={<Chat />} />
                <SignUpDialog />
              </Route>
              <Route path="/Calculator">
                <Calculator />
              </Route>
              <Route path="/FlavorForm">
                <FlavorForm />
              </Route>
              <Route path="/EssayForm">
                <EssayForm />
              </Route>
              <Route path="/NameForm">
                <NameForm />
              </Route>
              <Route path="/LoginControl">
                <LoginControl />
              </Route>
              <Route path="/toggle">
                <Toggle />
              </Route>
              <Route path="/clock">
                <Clock />
              </Route>
              <Route path="/game">
                <Game />
              </Route>
              <Route path="/topics">
                <Topics />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </main>
      </Router>
    </div>
  );
};

function Home() {
  return <h2>Home</h2>;
}

function Topics() {
  let match = useRouteMatch();

  let getRandomInt = function (max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  };

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components/${getRandomInt(5)}`}>
            Components
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state/${getRandomInt(20)}`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId/:num`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic(): JSX.Element {
  let { topicId, num }: { topicId: string; num: string } = useParams();
  return (
    <h3>
      Requested topic ID: {topicId},num: {num}
    </h3>
  );
}

export default App;
