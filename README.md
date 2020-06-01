<h1 align="center">
    Day Time Seconds
</h1>

<h3 align="center">
    Used to facilitate the manipulation of days measured in seconds
</h3>

---

## :horse_racing: How to use

The DayTime class is used to manipulate a single day, storing a value in seconds ranging from
**0** (00:00:00) to **86399** (23:59:59).

The library is available as an [npm package](https://www.npmjs.com/package/day-time-seconds).
To install the package run:

```bash
npm install day-time-seconds --save
# or with yarn
yarn add day-time-seconds
```

Example usage:

```js
const DayTime = require('day-time-seconds');
const time = new DayTime().now();

console.log(time.toString());
// 23:49:59 (current time example)
```

## :memo: Documentation

### Exceptions

The seconds values must range from 0 to 86399, otherwise, an exception will be thrown.

```js
const time = new DayTime(86500);

// Error: The value (seconds: 86500) is out of range
```

### Methods

`static now()`: The static DayTime.now() method returns the number of seconds elapsed since 00:00:00.

```js
const time = new DayTime().now();

console.log(time.toString());
// 23:49:59 (current time example)
```

`getTotalSeconds()`: Get the seconds related to time.

```js
const time = new DayTime(3600);
// 01:00:00

const seconds = time.getTotalSeconds();
// seconds -> 3600
```

`setTotalSeconds(seconds)`: Set the time using seconds.

```js
const time = new DayTime(3600);
// 01:00:00

time.setTotalSeconds(7200);
// 02:00:00
```

`getTotalMilliseconds()`: Get the seconds related to time, converted into milliseconds.

```js
const time = new DayTime(3600);
// 01:00:00

const ms = time.getTotalMilliseconds();
// ms -> 3600000
```

`setTotalMilliseconds(milliseconds)`: Set the time with seconds using milliseconds.

```js
const time = new DayTime(3600);
// 01:00:00

time.setTotalMilliseconds(7200000);
// 02:00:00
```

`getDaySeconds()`: Get only the full seconds relative to the time.

```js
const time = new DayTime(7269);
// 02:01:09

const seconds = time.getDaySeconds();
// seconds -> 9
```

`getDayMinutes()`: Get only the full minutes relative to the time.

```js
const time = new DayTime(7269);
// 02:01:09

const minutes = time.getDayMinutes();
// minutes -> 1
```

`getDayHours()`: Get only the full hours relative to the time.

```js
const time = new DayTime(7269);
// 02:01:09

const hours = time.getDayHours();
// hours -> 2
```

`addHours(hours)`: Add the specified number of hours to the current time.

```js
const time = new DayTime(3605);
// 01:00:05

time.addHours(2);
// 03:00:05
```

`addMinutes(minutes)`: Add the specified number of minutes to the current time.

```js
const time = new DayTime(3605);
// 01:00:05

time.addMinutes(40);
// 01:40:05
```

`addSeconds(seconds)`: Add the specified number of seconds to the current time.

```js
const time = new DayTime(3605);
// 01:00:05

time.addSeconds(50);
// 01:00:55
```

`subHours(hours)`: Subtract the specified number of hours from the current time.

```js
const time = new DayTime(7261);
// 02:01:01

time.subHours(1);
// 01:01:01
```

`subMinutes(minutes)`: Subtract the specified number of minutes from the current time.

```js
const time = new DayTime(7261);
// 02:01:01

time.subMinutes(1);
// 02:00:01
```

`subSeconds(seconds)`: Subtract the specified number of seconds from the current time.

```js
const time = new DayTime(7261);
// 02:01:01

time.subSeconds(1);
// 02:01:00
```

`getTimeFormatted(separator = ':')`: Return the formatted time string. Options may be passed to control the string separator.

```js
const time = new DayTime(3600);

console.log(time.getTimeFormatted());
// 01:00:00 (default separator is ':')
```

```js
const time = new DayTime(3602);

console.log(time.getTimeFormatted('|'));
// 01|00|02
```
