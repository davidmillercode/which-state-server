export class State {
    constructor(properties) {
        this.name = properties.state;
        this.points = properties.border;
    }

    // Use ray casting algorithm from stackoverflow
    isInside(point) {
        const points = this.points;

        const x = point.longitude;
        const y = point.latitude;

        let inside = false;
        for (var i = 0, j = points.length - 1; i < points.length; j = i++) {
            const xi = points[i][0];
            const yi = points[i][1];
            const xj = points[j][0];
            const yj = points[j][1];

            const intersect = ((yi > y) != (yj > y))
                && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }
        return inside;
    }
}
