import { Route, Switch, withRouter } from "react-router-dom";

/* Page imports */
import { Home } from "./pages/home";
import { Blog } from "./pages/blog";
import { About } from "./pages/about";
import { Socials } from "./components/socials";

import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedSwitch = withRouter(({location}) => (
    <TransitionGroup>
        <CSSTransition
            key={location.key}
            timeout={{
                enter: 400,
                exit: 400,
            }}
            classNames="page"
            unmountOnExit
        >
            <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="*" component={Home} />
            </Switch>
        </CSSTransition>
    </TransitionGroup>
));

function AppRoutes() {
    return (
        <div className="s_c">
            <AnimatedSwitch />
            <Socials />
        </div>
    );
}

export default AppRoutes;