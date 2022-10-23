# myAgro Practical Interview Test

### Describe briefly what this code does. What is its purpose? What feature does this component have?

The block of code provided is a react hook component/functional component that renders a button element on the DOM with multiple classes resulting into different styles on the same element.

It uses features such as:

- ternary condition to toggle between two different conditions easily with less code. 

e.g: 
```

const raws: any = icon ? (
    iconPos === IconPos.RIGHT ? (
      <React.Fragment>
        {children} {icon}
      </React.Fragment>
    ) : (
      <>
        {icon} {children}
      </>
    )
  ) : (
    children
  );

```

- ES6 Object destructuring, used to destructure object properties and make each property accessible as a single variable

```
const MysteryComponent: FC<Props> = ({
  children,
  style,
  icon,
  size,
  iconPos,
  className,
  disable,
  ...props
}) => {...}

```

- Prop types, to make sure that the props that the component will receive will be as expected. This makes our code less error prone and more predictable.

```
MysteryComponent.propTypes = {
    children: PropTypes.any,
    style: PropTypes.oneOf(['primary', 'secondary']),
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]), 
    iconPos: PropTypes.oneOf(['left', 'right']),
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['small', 'large', 'icon']),
    className: PropTypes.string,
    disable: PropTypes.bool
}

```
## How to run the app

- Navigate into the working directory `cd myAgro_test`
- Install the dependencies: `npm install`
- start the app: `npm start`
- Run the tests: `npm test`