FROM python:3.11
ENV PATH="/root/.local/bin:$PATH"

RUN curl -sSL https://install.python-poetry.org | python3 -

ENV PYTHONUNBUFFERED=1 \
    POETRY_NO_INTERACTION=1 \
    POETRY_VIRTUALENVS_IN_PROJECT=1 \
    POETRY_VIRTUALENVS_CREATE=1
    
WORKDIR /app


COPY ./pyproject.toml ./poetry.lock /app/
RUN poetry install --without dev --no-root

ENV PATH="/app/.venv/bin:$PATH"

COPY . .
CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]