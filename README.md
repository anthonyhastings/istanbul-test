# Istanbul Test

## Introduction
This repository demonstrates how we can not only perform unit testing on our JavaScript source code, but also determine code coverage statistics. Code coverage is a measure to describe the degree to which your source code has been tested by your unit tests. A higher code coverage result means your code has been more thoroughly tested and has a lower change of containing unwanted and unexpected bugs.

## Installation
Simply install the require node modules with the following command:

```npm install```

## Usage
Run the test suite with the snippet below in order to show unit test results and code coverage statistics within the terminal output. Some Jenkins-friendly XML results files will also be generated (JUnit for unit tests and Cobertura for code coverage).

```node_modules/karma/bin/karma start```