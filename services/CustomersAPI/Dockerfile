FROM python:3.7-alpine
ENV PYTHONUNBUFFERED 1
RUN mkdir /customers
WORKDIR /customers
COPY requirements.txt /customers/
RUN pip install -r requirements.txt
COPY . /customers/